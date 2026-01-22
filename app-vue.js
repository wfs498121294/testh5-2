const { createApp } = Vue;

createApp({
    data() {
        return {
            // State
            coinBalance: 100, // 默认100金币
            activeTab: 'elements',
            searchQuery: '',
            categoryFilter: '',
            categoryDropdownOpen: false, // 分类下拉菜单状态
            elements: ELEMENTS_DATA,
            selectedElement: null,
            
            // Quiz
            quizScore: 0,
            quizStreak: 0,
            currentQuizIndex: 0,
            quizAnswered: false,
            quizCorrect: false,
            selectedAnswer: null,
            
            // Check-in
            checkIns: [],
            showCheckinModal: false,
            currentPhoto: null,
            checkinTags: '',
            checkinNotes: '',
            
            // Compare
            selectedElements: [],
            showElementSelection: false,
            
            // Shop
            showShop: false,
            pendingPurchase: null, // 存储待支付的套餐信息
            
            // Features
            unlockedFeatures: {},
            
            // Stats
            stats: {
                elementsViewed: 0,
                checkins: 0,
                quizzesTaken: 0
            },
            
            // UI
            loading: false,
            alert: {
                show: false,
                title: '',
                message: '',
                buttons: []
            },
            showGuideModal: false, // 使用说明模态框
            
            // Tabs
            tabs: [
                { id: 'elements', icon: '🔬', label: 'Elements' },
                { id: 'quiz', icon: '🎯', label: 'Quiz' },
                { id: 'checkin', icon: '📸', label: 'Check-in' },
                { id: 'compare', icon: '⚖️', label: 'Compare' },
                { id: 'profile', icon: '👤', label: 'Profile' }
            ]
        };
    },
    
    computed: {
        filteredElements() {
            let filtered = this.elements;
            
            if (this.searchQuery) {
                const q = this.searchQuery.toLowerCase();
                filtered = filtered.filter(el =>
                    el.name.toLowerCase().includes(q) ||
                    el.symbol.toLowerCase().includes(q) ||
                    el.atomicNumber.toString().includes(q)
                );
            }
            
            if (this.categoryFilter) {
                filtered = filtered.filter(el => el.category === this.categoryFilter);
            }
            
            return filtered;
        },
        
        currentQuestion() {
            // 从多个题库中随机选择
            const allQuestions = [...QUIZ_QUESTIONS, ...QUIZ_QUESTIONS_BANK2, ...QUIZ_QUESTIONS_BANK3];
            // 使用随机索引而不是顺序索引
            const randomIndex = Math.floor(Math.random() * allQuestions.length);
            return allQuestions[randomIndex];
        },
        
        standardPackages() {
            return COIN_PACKAGES.filter(p => p.type === 'standard');
        },
        
        promotionalPackages() {
            return COIN_PACKAGES.filter(p => p.type === 'promotional');
        },
        
        unlockableFeatures() {
            return UNLOCKABLE_FEATURES;
        },
        
        unlockedFeaturesList() {
            return UNLOCKABLE_FEATURES.filter(f => this.isFeatureUnlocked(f.id));
        },
        
        CHEMICAL_REACTIONS() {
            return CHEMICAL_REACTIONS;
        }
    },
    
    methods: {
        // Element Methods
        showElementDetail(element) {
            this.selectedElement = element;
            this.stats.elementsViewed++;
            this.saveStats();
        },
        
        getCategoryName(category) {
            const names = {
                'alkali-metal': 'Alkali Metal',
                'alkaline-earth-metal': 'Alkaline Earth',
                'transition-metal': 'Transition Metal',
                'post-transition-metal': 'Post-transition',
                'metalloid': 'Metalloid',
                'nonmetal': 'Nonmetal',
                'halogen': 'Halogen',
                'noble-gas': 'Noble Gas',
                'lanthanide': 'Lanthanide',
                'actinide': 'Actinide'
            };
            return names[category] || category;
        },
        
        toggleCategoryDropdown() {
            this.categoryDropdownOpen = !this.categoryDropdownOpen;
        },
        
        selectCategory(category) {
            this.categoryFilter = category;
            this.categoryDropdownOpen = false;
        },
        
        unlockHDChart(atomicNumber) {
            const cost = 10;
            if (this.coinBalance < cost) {
                this.showAlert('Insufficient Coins', `Need ${cost} coins, current balance: ${this.coinBalance}`);
                return;
            }
            
            this.showConfirm('Confirm Unlock', `Spend ${cost} coins to unlock HD charts?`, () => {
                this.coinBalance -= cost;
                this.unlockedFeatures[`hd_charts_${atomicNumber}`] = { unlockedAt: Date.now() };
                this.saveData();
                this.selectedElement = null;
                this.showAlert('Success', 'HD Charts unlocked!');
            });
        },
        
        // Quiz Methods
        selectAnswer(index) {
            if (this.quizAnswered) return;
            
            this.selectedAnswer = index;
            this.quizAnswered = true;
            this.quizCorrect = index === this.currentQuestion.correct;
            
            if (this.quizCorrect) {
                this.quizScore += 10;
                this.quizStreak++;
            } else {
                this.quizStreak = 0;
            }
            
            this.stats.quizzesTaken++;
            this.saveData();
        },
        
        getOptionClass(index) {
            if (!this.quizAnswered) return '';
            if (index === this.currentQuestion.correct) return 'correct';
            if (index === this.selectedAnswer && !this.quizCorrect) return 'incorrect';
            return '';
        },
        
        nextQuestion() {
            this.currentQuizIndex++;
            this.quizAnswered = false;
            this.quizCorrect = false;
            this.selectedAnswer = null;
        },
        
        // Check-in Methods
        handlePhotoSelect(event) {
            const file = event.target.files[0];
            if (!file) return;
            
            const reader = new FileReader();
            reader.onload = (e) => {
                this.currentPhoto = e.target.result;
            };
            reader.readAsDataURL(file);
        },
        
        submitCheckin() {
            if (!this.currentPhoto) {
                this.showAlert('Notice', 'Please take a photo first');
                return;
            }
            
            const elementTags = this.checkinTags
                .split(',')
                .map(tag => tag.trim().toUpperCase())
                .filter(tag => tag)
                .map(symbol => {
                    const element = this.elements.find(e => e.symbol === symbol);
                    return element ? element.atomicNumber : null;
                })
                .filter(num => num !== null);
            
            const checkIn = {
                id: `checkin_${Date.now()}`,
                timestamp: Date.now(),
                photoDataUrl: this.currentPhoto,
                elementTags,
                notes: this.checkinNotes
            };
            
            this.checkIns.unshift(checkIn);
            this.stats.checkins++;
            this.saveData();
            
            this.showCheckinModal = false;
            this.currentPhoto = null;
            this.checkinTags = '';
            this.checkinNotes = '';
            
            this.showAlert('Success', 'Check-in saved!');
        },
        
        deleteCheckin(checkinId) {
            this.showConfirm('Delete Check-in', 'Are you sure you want to delete this check-in?', () => {
                this.checkIns = this.checkIns.filter(c => c.id !== checkinId);
                this.stats.checkins = Math.max(0, this.stats.checkins - 1);
                this.saveData();
                this.showAlert('Success', 'Check-in deleted!');
            });
        },
        
        formatDate(timestamp) {
            return new Date(timestamp).toLocaleString('en-US', {
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
        },
        
        getElementSymbol(atomicNumber) {
            const el = this.elements.find(e => e.atomicNumber === atomicNumber);
            return el ? el.symbol : '';
        },
        
        // Compare Methods
        toggleElementSelection(element) {
            const index = this.selectedElements.findIndex(e => e.atomicNumber === element.atomicNumber);
            if (index > -1) {
                this.selectedElements.splice(index, 1);
            } else {
                if (this.selectedElements.length < 3) {
                    this.selectedElements.push(element);
                } else {
                    this.showAlert('Limit Reached', 'You can only compare up to 3 elements');
                }
            }
        },
        
        isElementSelected(element) {
            return this.selectedElements.some(e => e.atomicNumber === element.atomicNumber);
        },
        
        getComparisonProperties() {
            if (this.selectedElements.length === 0) return [];
            
            const properties = [
                { key: 'name', label: 'Name' },
                { key: 'atomicNumber', label: 'Atomic #' },
                { key: 'atomicMass', label: 'Mass' },
                { key: 'category', label: 'Category', format: this.getCategoryName },
                { key: 'electronConfiguration', label: 'Electron Config' },
                { key: 'meltingPoint', label: 'Melting Point', unit: '°C' },
                { key: 'boilingPoint', label: 'Boiling Point', unit: '°C' },
                { key: 'density', label: 'Density', unit: 'g/cm³' },
                { key: 'discoveryYear', label: 'Discovery Year' }
            ];
            
            return properties.map(prop => {
                const values = this.selectedElements.map(el => {
                    let value = el[prop.key];
                    if (prop.format) value = prop.format(value);
                    if (prop.unit) value = `${value} ${prop.unit}`;
                    return String(value);
                });
                
                // 判断是否相同 - 转换为字符串比较
                const allSame = values.every(v => v === values[0]);
                
                return {
                    label: prop.label,
                    values: values,
                    same: allSame
                };
            });
        },
        
        confirmSelection() {
            if (this.selectedElements.length < 2) {
                this.showAlert('Notice', 'Please select at least 2 elements');
                return;
            }
            this.showElementSelection = false;
        },
        
        // Shop Methods
        purchasePackage(pkg) {
            this.showConfirm('Confirm Purchase', `Purchase ${pkg.coins} coins for ${pkg.price}?`, () => {
                this.loading = true;
                this.pendingPurchase = pkg; // 保存待支付套餐信息
                
                // Send payment message to native
                const message = {
                    action: "Pay",
                    p1: pkg.code,
                    p2: "",
                    p3: ""
                };
                
                // Try to send to native bridge
                if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.event) {
                    // iOS WKWebView
                    window.webkit.messageHandlers.event.postMessage(message);
                } else if (window.AndroidBridge && window.AndroidBridge.postMessage) {
                    // Android WebView
                    window.AndroidBridge.postMessage(JSON.stringify(message));
                } else {
                    // Fallback for testing in browser
                    console.log('Payment message:', message);
                    setTimeout(() => {
                        window.onAppEvent('paySuccess', '');
                    }, 1500);
                }
            });
        },
        
        unlockFeature(feature) {
            if (this.coinBalance < feature.cost) {
                this.showAlert('Insufficient Coins', `Need ${feature.cost} coins, current balance: ${this.coinBalance}`);
                return;
            }
            
            this.showConfirm('Confirm Unlock', `Spend ${feature.cost} coins to unlock ${feature.name}?`, () => {
                this.coinBalance -= feature.cost;
                const duration = feature.type === 'monthly' ? 30 * 24 * 60 * 60 * 1000 : null;
                this.unlockedFeatures[feature.id] = {
                    unlockedAt: Date.now(),
                    expiresAt: duration ? Date.now() + duration : null
                };
                this.saveData();
                this.showAlert('Success', `${feature.name} unlocked!`);
            });
        },
        
        unlockReaction(reactionId) {
            const cost = 8; // 化学反应式消耗8金币
            if (this.coinBalance < cost) {
                this.showAlert('Insufficient Coins', `Need ${cost} coins, current balance: ${this.coinBalance}`);
                return;
            }
            
            this.showConfirm('Unlock Reaction', `Spend ${cost} coins to unlock this chemical reaction?`, () => {
                this.coinBalance -= cost;
                this.unlockedFeatures[`reaction_${reactionId}`] = { unlockedAt: Date.now() };
                this.saveData();
                this.showAlert('Success', 'Chemical reaction unlocked!');
            });
        },
        
        isFeatureUnlocked(featureId) {
            const feature = this.unlockedFeatures[featureId];
            if (!feature) return false;
            if (feature.expiresAt && feature.expiresAt < Date.now()) {
                delete this.unlockedFeatures[featureId];
                this.saveData();
                return false;
            }
            return true;
        },
        
        // WebView
        openWebView(title, url) {
            window.open(url, '_blank');
        },
        
        // Alert Methods
        showAlert(title, message, callback) {
            this.alert = {
                show: true,
                title,
                message,
                buttons: [
                    {
                        text: 'OK',
                        style: 'primary',
                        action: () => {
                            this.alert.show = false;
                            if (callback) callback();
                        }
                    }
                ]
            };
        },
        
        showConfirm(title, message, onConfirm) {
            this.alert = {
                show: true,
                title,
                message,
                buttons: [
                    {
                        text: 'Cancel',
                        style: 'secondary',
                        action: () => {
                            this.alert.show = false;
                        }
                    },
                    {
                        text: 'Confirm',
                        style: 'primary',
                        action: () => {
                            this.alert.show = false;
                            if (onConfirm) onConfirm();
                        }
                    }
                ]
            };
        },
        
        // Storage Methods
        saveData() {
            localStorage.setItem('moe_coin_balance', this.coinBalance.toString());
            localStorage.setItem('moe_unlocked_features', JSON.stringify(this.unlockedFeatures));
            localStorage.setItem('moe_checkins', JSON.stringify(this.checkIns));
            localStorage.setItem('moe_quiz_score', this.quizScore.toString());
            localStorage.setItem('moe_quiz_streak', this.quizStreak.toString());
            this.saveStats();
        },
        
        saveStats() {
            localStorage.setItem('moe_stats', JSON.stringify(this.stats));
        },
        
        loadData() {
            this.coinBalance = parseInt(localStorage.getItem('moe_coin_balance') || '100');
            this.unlockedFeatures = JSON.parse(localStorage.getItem('moe_unlocked_features') || '{}');
            this.checkIns = JSON.parse(localStorage.getItem('moe_checkins') || '[]');
            this.quizScore = parseInt(localStorage.getItem('moe_quiz_score') || '0');
            this.quizStreak = parseInt(localStorage.getItem('moe_quiz_streak') || '0');
            this.stats = JSON.parse(localStorage.getItem('moe_stats') || '{"elementsViewed":0,"checkins":0,"quizzesTaken":0}');
        }
    },
    
    mounted() {
        this.loadData();
        
        // Setup native bridge callback
        window.onAppEvent = (event, data) => {
            this.loading = false;
            
            if (event === 'paySuccess') {
                // 添加金币
                if (this.pendingPurchase) {
                    this.coinBalance += this.pendingPurchase.coins;
                    const coins = this.pendingPurchase.coins;
                    this.pendingPurchase = null;
                    this.saveData();
                    this.showAlert('Payment Success', `You received ${coins} coins! Current balance: ${this.coinBalance}`);
                } else {
                    this.loadData();
                    this.showAlert('Payment Success', 'Payment completed successfully!');
                }
            } else if (event === 'payFailed') {
                this.pendingPurchase = null;
                this.showAlert('Payment Failed', 'Payment was not completed. Please try again.');
            }
        };
        
        // Prevent context menu (long-press menu)
        document.addEventListener('contextmenu', (e) => e.preventDefault());
        
        // Disable WKWebView link preview
        document.addEventListener('touchstart', (e) => {
            if (e.target.tagName === 'A') {
                e.preventDefault();
            }
        }, { passive: false });
        
        // 点击外部关闭下拉菜单
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.category-dropdown-wrapper')) {
                this.categoryDropdownOpen = false;
            }
        });
    }
}).mount('#app');
