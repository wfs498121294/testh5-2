// Element Data - 增强版，包含更多属性
const ELEMENTS_DATA = [
    { 
        atomicNumber: 1, 
        symbol: 'H', 
        name: 'Hydrogen', 
        category: 'nonmetal', 
        atomicMass: 1.008, 
        electronConfiguration: '1s¹', 
        meltingPoint: -259.16,
        boilingPoint: -252.87,
        density: 0.00008988,
        discoveryYear: 1766,
        description: 'Hydrogen is the most abundant element in the universe and the lightest element. It is colorless, odorless, and highly flammable. Essential for water formation and organic compounds.' 
    },
    { 
        atomicNumber: 2, 
        symbol: 'He', 
        name: 'Helium', 
        category: 'noble-gas', 
        atomicMass: 4.003, 
        electronConfiguration: '1s²', 
        meltingPoint: -272.2,
        boilingPoint: -268.93,
        density: 0.0001785,
        discoveryYear: 1868,
        description: 'Helium is the second lightest element and an inert gas. It has the lowest boiling point of all elements and is used in balloons, airships, and as a coolant.' 
    },
    { 
        atomicNumber: 3, 
        symbol: 'Li', 
        name: 'Lithium', 
        category: 'alkali-metal', 
        atomicMass: 6.941, 
        electronConfiguration: '[He] 2s¹', 
        meltingPoint: 180.5,
        boilingPoint: 1342,
        density: 0.534,
        discoveryYear: 1817,
        description: 'Lithium is the lightest metal, widely used in battery manufacturing. It is soft, silvery-white, and highly reactive. Essential for modern rechargeable batteries.' 
    },
    { 
        atomicNumber: 4, 
        symbol: 'Be', 
        name: 'Beryllium', 
        category: 'alkaline-earth-metal', 
        atomicMass: 9.012, 
        electronConfiguration: '[He] 2s²', 
        meltingPoint: 1287,
        boilingPoint: 2470,
        density: 1.85,
        discoveryYear: 1798,
        description: 'Beryllium is a lightweight, hard metal with high melting point. Used in aerospace applications and X-ray windows due to its transparency to X-rays.' 
    },
    { 
        atomicNumber: 5, 
        symbol: 'B', 
        name: 'Boron', 
        category: 'metalloid', 
        atomicMass: 10.81, 
        electronConfiguration: '[He] 2s² 2p¹', 
        meltingPoint: 2075,
        boilingPoint: 4000,
        density: 2.34,
        discoveryYear: 1808,
        description: 'Boron is a metalloid element with unique properties. Used in glass, ceramics, and as a semiconductor dopant. Essential for plant growth.' 
    },
    { 
        atomicNumber: 6, 
        symbol: 'C', 
        name: 'Carbon', 
        category: 'nonmetal', 
        atomicMass: 12.01, 
        electronConfiguration: '[He] 2s² 2p²', 
        meltingPoint: 3550,
        boilingPoint: 4027,
        density: 2.267,
        discoveryYear: 'Ancient',
        description: 'Carbon is the foundation of life, forming various allotropes including diamond and graphite. Essential for all organic compounds and life on Earth.' 
    },
    { 
        atomicNumber: 7, 
        symbol: 'N', 
        name: 'Nitrogen', 
        category: 'nonmetal', 
        atomicMass: 14.01, 
        electronConfiguration: '[He] 2s² 2p³', 
        meltingPoint: -210.0,
        boilingPoint: -195.79,
        density: 0.0012506,
        discoveryYear: 1772,
        description: 'Nitrogen makes up 78% of the atmosphere and is an important component of proteins. Colorless, odorless gas essential for life and agriculture.' 
    },
    { 
        atomicNumber: 8, 
        symbol: 'O', 
        name: 'Oxygen', 
        category: 'nonmetal', 
        atomicMass: 16.00, 
        electronConfiguration: '[He] 2s² 2p⁴', 
        meltingPoint: -218.79,
        boilingPoint: -182.96,
        density: 0.001429,
        discoveryYear: 1774,
        description: 'Oxygen is the most abundant element on Earth and essential for life. Supports combustion and respiration. Makes up 21% of the atmosphere.' 
    },
    { 
        atomicNumber: 9, 
        symbol: 'F', 
        name: 'Fluorine', 
        category: 'halogen', 
        atomicMass: 19.00, 
        electronConfiguration: '[He] 2s² 2p⁵', 
        meltingPoint: -219.67,
        boilingPoint: -188.11,
        density: 0.001696,
        discoveryYear: 1886,
        description: 'Fluorine is the most reactive nonmetal element. Pale yellow gas used in toothpaste, Teflon, and uranium enrichment.' 
    },
    { 
        atomicNumber: 10, 
        symbol: 'Ne', 
        name: 'Neon', 
        category: 'noble-gas', 
        atomicMass: 20.18, 
        electronConfiguration: '[He] 2s² 2p⁶', 
        meltingPoint: -248.59,
        boilingPoint: -246.08,
        density: 0.0008999,
        discoveryYear: 1898,
        description: 'Neon is an inert gas commonly used in neon lights. Produces distinctive red-orange glow when electrified. Second-lightest noble gas.' 
    },
    { atomicNumber: 11, symbol: 'Na', name: 'Sodium', category: 'alkali-metal', atomicMass: 22.99, electronConfiguration: '[Ne] 3s¹', meltingPoint: 97.72, boilingPoint: 883, density: 0.971, discoveryYear: 1807, description: 'Sodium is a reactive alkali metal, commonly found in table salt. Soft, silvery-white metal that reacts violently with water.' },
    { atomicNumber: 12, symbol: 'Mg', name: 'Magnesium', category: 'alkaline-earth-metal', atomicMass: 24.31, electronConfiguration: '[Ne] 3s²', meltingPoint: 650, boilingPoint: 1090, density: 1.738, discoveryYear: 1808, description: 'Magnesium is a lightweight metal used in alloy manufacturing. Burns with brilliant white light. Essential for chlorophyll in plants.' },
    { atomicNumber: 13, symbol: 'Al', name: 'Aluminum', category: 'post-transition-metal', atomicMass: 26.98, electronConfiguration: '[Ne] 3s² 3p¹', meltingPoint: 660.32, boilingPoint: 2519, density: 2.70, discoveryYear: 1825, description: 'Aluminum is the most abundant metal in the Earth\'s crust. Lightweight, corrosion-resistant, widely used in construction and packaging.' },
    { atomicNumber: 14, symbol: 'Si', name: 'Silicon', category: 'metalloid', atomicMass: 28.09, electronConfiguration: '[Ne] 3s² 3p²', meltingPoint: 1414, boilingPoint: 3265, density: 2.3296, discoveryYear: 1824, description: 'Silicon is the foundation material of the semiconductor industry. Second most abundant element in Earth\'s crust after oxygen.' },
    { atomicNumber: 15, symbol: 'P', name: 'Phosphorus', category: 'nonmetal', atomicMass: 30.97, electronConfiguration: '[Ne] 3s² 3p³', meltingPoint: 44.15, boilingPoint: 280.5, density: 1.82, discoveryYear: 1669, description: 'Phosphorus is an important component of DNA and ATP. Exists in several forms including white and red phosphorus. Essential for life.' },
    { atomicNumber: 16, symbol: 'S', name: 'Sulfur', category: 'nonmetal', atomicMass: 32.07, electronConfiguration: '[Ne] 3s² 3p⁴', meltingPoint: 115.21, boilingPoint: 444.72, density: 2.067, discoveryYear: 'Ancient', description: 'Sulfur is a yellow solid used in sulfuric acid production. Essential for proteins and found in volcanic regions.' },
    { atomicNumber: 17, symbol: 'Cl', name: 'Chlorine', category: 'halogen', atomicMass: 35.45, electronConfiguration: '[Ne] 3s² 3p⁵', meltingPoint: -101.5, boilingPoint: -34.04, density: 0.003214, discoveryYear: 1774, description: 'Chlorine is a yellow-green gas used for disinfection. Highly reactive and toxic. Essential for water purification.' },
    { atomicNumber: 18, symbol: 'Ar', name: 'Argon', category: 'noble-gas', atomicMass: 39.95, electronConfiguration: '[Ne] 3s² 3p⁶', meltingPoint: -189.35, boilingPoint: -185.85, density: 0.0017837, discoveryYear: 1894, description: 'Argon is the third most abundant gas in the atmosphere. Inert gas used in welding and light bulbs.' },
    { atomicNumber: 19, symbol: 'K', name: 'Potassium', category: 'alkali-metal', atomicMass: 39.10, electronConfiguration: '[Ar] 4s¹', meltingPoint: 63.5, boilingPoint: 759, density: 0.862, discoveryYear: 1807, description: 'Potassium is an essential element for living organisms. Soft, silvery metal that reacts with water. Important for nerve function.' },
    { atomicNumber: 20, symbol: 'Ca', name: 'Calcium', category: 'alkaline-earth-metal', atomicMass: 40.08, electronConfiguration: '[Ar] 4s²', meltingPoint: 842, boilingPoint: 1484, density: 1.54, discoveryYear: 1808, description: 'Calcium is the main component of bones and teeth. Fifth most abundant element in Earth\'s crust. Essential for muscle function.' },
    { atomicNumber: 21, symbol: 'Sc', name: 'Scandium', category: 'transition-metal', atomicMass: 44.96, electronConfiguration: '[Ar] 3d¹ 4s²', meltingPoint: 1541, boilingPoint: 2836, density: 2.989, discoveryYear: 1879, description: 'Scandium is the first transition metal element. Lightweight metal used in aerospace alloys and sports equipment.' },
    { atomicNumber: 22, symbol: 'Ti', name: 'Titanium', category: 'transition-metal', atomicMass: 47.87, electronConfiguration: '[Ar] 3d² 4s²', meltingPoint: 1668, boilingPoint: 3287, density: 4.506, discoveryYear: 1791, description: 'Titanium has high strength and corrosion resistance. Used in aerospace, medical implants, and jewelry. Strong as steel but lighter.' },
    { atomicNumber: 23, symbol: 'V', name: 'Vanadium', category: 'transition-metal', atomicMass: 50.94, electronConfiguration: '[Ar] 3d³ 4s²', meltingPoint: 1910, boilingPoint: 3407, density: 6.11, discoveryYear: 1801, description: 'Vanadium is used in steel alloy manufacturing. Improves strength and wear resistance. Named after Vanadis, Norse goddess of beauty.' },
    { atomicNumber: 24, symbol: 'Cr', name: 'Chromium', category: 'transition-metal', atomicMass: 52.00, electronConfiguration: '[Ar] 3d⁵ 4s¹', meltingPoint: 1907, boilingPoint: 2671, density: 7.15, discoveryYear: 1797, description: 'Chromium is used in stainless steel and electroplating. Gives stainless steel its shine and corrosion resistance.' },
    { atomicNumber: 25, symbol: 'Mn', name: 'Manganese', category: 'transition-metal', atomicMass: 54.94, electronConfiguration: '[Ar] 3d⁵ 4s²', meltingPoint: 1246, boilingPoint: 2061, density: 7.44, discoveryYear: 1774, description: 'Manganese is an important element in steel production. Essential for photosynthesis and human metabolism.' },
    { atomicNumber: 26, symbol: 'Fe', name: 'Iron', category: 'transition-metal', atomicMass: 55.85, electronConfiguration: '[Ar] 3d⁶ 4s²', meltingPoint: 1538, boilingPoint: 2862, density: 7.874, discoveryYear: 'Ancient', description: 'Iron is the most common metal on Earth. Essential for hemoglobin in blood. Foundation of modern civilization.' },
    { atomicNumber: 27, symbol: 'Co', name: 'Cobalt', category: 'transition-metal', atomicMass: 58.93, electronConfiguration: '[Ar] 3d⁷ 4s²', meltingPoint: 1495, boilingPoint: 2927, density: 8.86, discoveryYear: 1735, description: 'Cobalt is used in batteries and magnetic materials. Blue pigment in glass and ceramics. Essential for vitamin B12.' },
    { atomicNumber: 28, symbol: 'Ni', name: 'Nickel', category: 'transition-metal', atomicMass: 58.69, electronConfiguration: '[Ar] 3d⁸ 4s²', meltingPoint: 1455, boilingPoint: 2913, density: 8.912, discoveryYear: 1751, description: 'Nickel is used in stainless steel and batteries. Corrosion-resistant. Used in coins and rechargeable batteries.' },
    { atomicNumber: 29, symbol: 'Cu', name: 'Copper', category: 'transition-metal', atomicMass: 63.55, electronConfiguration: '[Ar] 3d¹⁰ 4s¹', meltingPoint: 1084.62, boilingPoint: 2562, density: 8.96, discoveryYear: 'Ancient', description: 'Copper is an excellent electrical conductor. Used since ancient times. Essential for electrical wiring and plumbing.' },
    { atomicNumber: 30, symbol: 'Zn', name: 'Zinc', category: 'transition-metal', atomicMass: 65.39, electronConfiguration: '[Ar] 3d¹⁰ 4s²', meltingPoint: 419.53, boilingPoint: 907, density: 7.134, discoveryYear: 1746, description: 'Zinc is used for galvanizing and alloy manufacturing. Essential nutrient for immune system. Prevents rust on steel.' },
    { atomicNumber: 31, symbol: 'Ga', name: 'Gallium', category: 'post-transition-metal', atomicMass: 69.72, electronConfiguration: '[Ar] 3d¹⁰ 4s² 4p¹', meltingPoint: 29.76, boilingPoint: 2204, density: 5.907, discoveryYear: 1875, description: 'Gallium melts near room temperature. Used in semiconductors and LEDs. Liquid at body temperature.' },
    { atomicNumber: 32, symbol: 'Ge', name: 'Germanium', category: 'metalloid', atomicMass: 72.64, electronConfiguration: '[Ar] 3d¹⁰ 4s² 4p²', meltingPoint: 938.25, boilingPoint: 2833, density: 5.323, discoveryYear: 1886, description: 'Germanium is an important semiconductor material. Used in fiber optics and infrared optics. Predicted by Mendeleev.' },
    { atomicNumber: 33, symbol: 'As', name: 'Arsenic', category: 'metalloid', atomicMass: 74.92, electronConfiguration: '[Ar] 3d¹⁰ 4s² 4p³', meltingPoint: 817, boilingPoint: 614, density: 5.776, discoveryYear: 'Ancient', description: 'Arsenic and its compounds are toxic. Used in semiconductors and wood preservatives. Historically used as poison.' },
    { atomicNumber: 34, symbol: 'Se', name: 'Selenium', category: 'nonmetal', atomicMass: 78.96, electronConfiguration: '[Ar] 3d¹⁰ 4s² 4p⁴', meltingPoint: 221, boilingPoint: 685, density: 4.809, discoveryYear: 1817, description: 'Selenium is an essential trace element for the human body. Used in photocells and glass manufacturing. Antioxidant properties.' },
    { atomicNumber: 35, symbol: 'Br', name: 'Bromine', category: 'halogen', atomicMass: 79.90, electronConfiguration: '[Ar] 3d¹⁰ 4s² 4p⁵', meltingPoint: -7.2, boilingPoint: 58.8, density: 3.122, discoveryYear: 1826, description: 'Bromine is the only liquid nonmetal at room temperature. Red-brown liquid with pungent odor. Used in flame retardants.' },
    { atomicNumber: 36, symbol: 'Kr', name: 'Krypton', category: 'noble-gas', atomicMass: 83.80, electronConfiguration: '[Ar] 3d¹⁰ 4s² 4p⁶', meltingPoint: -157.36, boilingPoint: -153.22, density: 0.003733, discoveryYear: 1898, description: 'Krypton is an inert gas. Used in high-performance light bulbs and lasers. Produces bright white light.' },
    { atomicNumber: 37, symbol: 'Rb', name: 'Rubidium', category: 'alkali-metal', atomicMass: 85.47, electronConfiguration: '[Kr] 5s¹', meltingPoint: 39.31, boilingPoint: 688, density: 1.532, discoveryYear: 1861, description: 'Rubidium is a reactive alkali metal. Soft, silvery-white. Used in atomic clocks and photocells.' },
    { atomicNumber: 38, symbol: 'Sr', name: 'Strontium', category: 'alkaline-earth-metal', atomicMass: 87.62, electronConfiguration: '[Kr] 5s²', meltingPoint: 777, boilingPoint: 1382, density: 2.64, discoveryYear: 1790, description: 'Strontium is used in fireworks and flares. Produces brilliant red color. Used in cathode ray tubes.' },
    { atomicNumber: 39, symbol: 'Y', name: 'Yttrium', category: 'transition-metal', atomicMass: 88.91, electronConfiguration: '[Kr] 4d¹ 5s²', meltingPoint: 1526, boilingPoint: 3345, density: 4.469, discoveryYear: 1794, description: 'Yttrium is used in phosphors and laser materials. Essential for LED lights and superconductors. Named after Ytterby, Sweden.' },
    { atomicNumber: 40, symbol: 'Zr', name: 'Zirconium', category: 'transition-metal', atomicMass: 91.22, electronConfiguration: '[Kr] 4d² 5s²', meltingPoint: 1855, boilingPoint: 4409, density: 6.506, discoveryYear: 1789, description: 'Zirconium has excellent corrosion resistance. Used in nuclear reactors and jewelry. Extremely resistant to heat and corrosion.' },
    { atomicNumber: 41, symbol: 'Nb', name: 'Niobium', category: 'transition-metal', atomicMass: 92.91, electronConfiguration: '[Kr] 4d⁴ 5s¹', meltingPoint: 2477, boilingPoint: 4744, density: 8.57, discoveryYear: 1801, description: 'Niobium is used in superconducting materials. High melting point. Used in jet engines and MRI scanners.' },
    { atomicNumber: 42, symbol: 'Mo', name: 'Molybdenum', category: 'transition-metal', atomicMass: 95.94, electronConfiguration: '[Kr] 4d⁵ 5s¹', meltingPoint: 2623, boilingPoint: 4639, density: 10.22, discoveryYear: 1778, description: 'Molybdenum is used in high-strength steel. Essential trace element for enzymes. Sixth-highest melting point of all elements.' },
    { atomicNumber: 43, symbol: 'Tc', name: 'Technetium', category: 'transition-metal', atomicMass: 98, electronConfiguration: '[Kr] 4d⁵ 5s²', meltingPoint: 2157, boilingPoint: 4265, density: 11.5, discoveryYear: 1937, description: 'Technetium is the first artificially synthesized element. Radioactive. Used in medical imaging and cancer treatment.' },
    { atomicNumber: 44, symbol: 'Ru', name: 'Ruthenium', category: 'transition-metal', atomicMass: 101.07, electronConfiguration: '[Kr] 4d⁷ 5s¹', meltingPoint: 2334, boilingPoint: 4150, density: 12.37, discoveryYear: 1844, description: 'Ruthenium is used in catalysts and electronic devices. Rare platinum group metal. Hardens platinum and palladium alloys.' },
    { atomicNumber: 45, symbol: 'Rh', name: 'Rhodium', category: 'transition-metal', atomicMass: 102.91, electronConfiguration: '[Kr] 4d⁸ 5s¹', meltingPoint: 1964, boilingPoint: 3695, density: 12.41, discoveryYear: 1803, description: 'Rhodium is a precious metal used in catalytic converters. Highly reflective. Most expensive precious metal.' },
    { atomicNumber: 46, symbol: 'Pd', name: 'Palladium', category: 'transition-metal', atomicMass: 106.42, electronConfiguration: '[Kr] 4d¹⁰', meltingPoint: 1554.9, boilingPoint: 2963, density: 12.02, discoveryYear: 1803, description: 'Palladium is used in catalysts and jewelry. Absorbs hydrogen. Essential for catalytic converters in cars.' },
    { atomicNumber: 47, symbol: 'Ag', name: 'Silver', category: 'transition-metal', atomicMass: 107.87, electronConfiguration: '[Kr] 4d¹⁰ 5s¹', meltingPoint: 961.78, boilingPoint: 2162, density: 10.501, discoveryYear: 'Ancient', description: 'Silver is the best electrical and thermal conductor. Used in jewelry, coins, and electronics. Antibacterial properties.' },
    { atomicNumber: 48, symbol: 'Cd', name: 'Cadmium', category: 'transition-metal', atomicMass: 112.41, electronConfiguration: '[Kr] 4d¹⁰ 5s²', meltingPoint: 321.07, boilingPoint: 767, density: 8.69, discoveryYear: 1817, description: 'Cadmium is used in batteries and pigments. Toxic heavy metal. Used in rechargeable NiCd batteries.' },
    { atomicNumber: 49, symbol: 'In', name: 'Indium', category: 'post-transition-metal', atomicMass: 114.82, electronConfiguration: '[Kr] 4d¹⁰ 5s² 5p¹', meltingPoint: 156.60, boilingPoint: 2072, density: 7.31, discoveryYear: 1863, description: 'Indium is used in LCD displays. Soft, malleable metal. Essential for touchscreens and solar panels.' },
    { atomicNumber: 50, symbol: 'Sn', name: 'Tin', category: 'post-transition-metal', atomicMass: 118.71, electronConfiguration: '[Kr] 4d¹⁰ 5s² 5p²', meltingPoint: 231.93, boilingPoint: 2602, density: 7.287, discoveryYear: 'Ancient', description: 'Tin is used for soldering and tin plating. Prevents corrosion. Used since Bronze Age for making bronze alloy.' }
];

// Coin Packages Data - 完全匹配IAP套餐表
const COIN_PACKAGES = [
    // 标准套餐 (序号 00-11)
    { code: '473903', price: '$0.99', coins: 100, type: 'standard', discount: 0 },
    { code: '20020201', price: '$1.99', coins: 200, type: 'standard', discount: 0 },
    { code: '20020202', price: '$2.99', coins: 300, type: 'standard', discount: 0 },
    { code: '20020203', price: '$3.99', coins: 400, type: 'standard', discount: 0 },
    { code: '20020204', price: '$4.99', coins: 500, type: 'standard', discount: 0 },
    { code: '20020205', price: '$5.99', coins: 600, type: 'standard', discount: 0 },
    { code: '20020206', price: '$6.99', coins: 700, type: 'standard', discount: 0 },
    { code: '20020207', price: '$9.99', coins: 1200, type: 'standard', discount: 0 },
    { code: '20020208', price: '$12.99', coins: 1300, type: 'standard', discount: 0 },
    { code: '20020209', price: '$19.99', coins: 2500, type: 'standard', discount: 20 },
    { code: '20020210', price: '$49.99', coins: 7000, type: 'standard', discount: 30 },
    { code: '20020211', price: '$99.99', coins: 15000, type: 'standard', discount: 35 },
    // 促销套餐 (序号 12-19)
    { code: '20020212', price: '$1.99', coins: 500, type: 'promotional', discount: 60 },
    { code: '20020213', price: '$2.99', coins: 750, type: 'promotional', discount: 60 },
    { code: '20020214', price: '$4.99', coins: 1200, type: 'promotional', discount: 60 },
    { code: '20020215', price: '$5.99', coins: 1400, type: 'promotional', discount: 60 },
    { code: '20020216', price: '$11.99', coins: 2500, type: 'promotional', discount: 50 },
    { code: '20020217', price: '$12.99', coins: 2600, type: 'promotional', discount: 50 },
    { code: '20020218', price: '$34.99', coins: 7000, type: 'promotional', discount: 50 },
    { code: '20020219', price: '$79.99', coins: 15000, type: 'promotional', discount: 45 }
];

// Unlockable Features (降低价格到10-20)
const UNLOCKABLE_FEATURES = [
    { id: 'hd_charts', name: 'HD Element Charts', description: 'View high-definition electron cloud models and crystal structures', cost: 10, type: 'per_element' },
    { id: 'templates', name: 'Premium Check-in Templates', description: 'Unlock chemistry-themed check-in templates', cost: 15, type: 'permanent' },
    { id: 'quiz_bank', name: 'Element Quiz Bank', description: '1000+ chemistry element questions with offline support', cost: 15, type: 'permanent' },
    { id: 'ad_removal', name: 'Remove Ads', description: 'Block all ads for 30 days', cost: 20, type: 'monthly' },
    { id: 'element_comparison', name: 'Element Comparison', description: 'Compare 2-3 elements side by side', cost: 12, type: 'permanent' }
];

// Check-in Templates
const CHECKIN_TEMPLATES = [
    { id: 'default', name: 'Default', preview: '📷', unlocked: true },
    { id: 'lab', name: 'Laboratory', preview: '🧪', unlocked: false },
    { id: 'periodic', name: 'Periodic Table', preview: '🔬', unlocked: false },
    { id: 'molecule', name: 'Molecule', preview: '⚛️', unlocked: false }
];

// 化学反应式数据库
const CHEMICAL_REACTIONS = [
    {
        id: 1,
        name: 'Water Formation',
        equation: '2H₂ + O₂ → 2H₂O',
        type: 'Synthesis',
        description: 'Hydrogen gas reacts with oxygen gas to form water. This is a highly exothermic reaction that releases a large amount of energy.',
        elements: [1, 8],
        conditions: 'Spark or heat required',
        energy: 'Exothermic (-572 kJ/mol)'
    },
    {
        id: 2,
        name: 'Photosynthesis',
        equation: '6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂',
        type: 'Synthesis',
        description: 'Plants convert carbon dioxide and water into glucose and oxygen using sunlight energy. This is the foundation of life on Earth.',
        elements: [6, 1, 8],
        conditions: 'Sunlight, chlorophyll',
        energy: 'Endothermic (+2800 kJ/mol)'
    },
    {
        id: 3,
        name: 'Combustion of Methane',
        equation: 'CH₄ + 2O₂ → CO₂ + 2H₂O',
        type: 'Combustion',
        description: 'Methane burns in oxygen to produce carbon dioxide and water, releasing heat and light.',
        elements: [6, 1, 8],
        conditions: 'Ignition required',
        energy: 'Exothermic (-890 kJ/mol)'
    },
    {
        id: 4,
        name: 'Rusting of Iron',
        equation: '4Fe + 3O₂ → 2Fe₂O₃',
        type: 'Oxidation',
        description: 'Iron reacts with oxygen in the presence of water to form iron(III) oxide, commonly known as rust.',
        elements: [26, 8],
        conditions: 'Moisture and oxygen',
        energy: 'Exothermic'
    },
    {
        id: 5,
        name: 'Neutralization',
        equation: 'HCl + NaOH → NaCl + H₂O',
        type: 'Acid-Base',
        description: 'Hydrochloric acid reacts with sodium hydroxide to form salt (sodium chloride) and water.',
        elements: [1, 17, 11, 8],
        conditions: 'Room temperature',
        energy: 'Exothermic (-57 kJ/mol)'
    },
    {
        id: 6,
        name: 'Ammonia Synthesis',
        equation: 'N₂ + 3H₂ ⇌ 2NH₃',
        type: 'Synthesis',
        description: 'The Haber process combines nitrogen and hydrogen to produce ammonia, essential for fertilizers.',
        elements: [7, 1],
        conditions: 'High pressure (200 atm), 450°C, iron catalyst',
        energy: 'Exothermic (-92 kJ/mol)'
    },
    {
        id: 7,
        name: 'Electrolysis of Water',
        equation: '2H₂O → 2H₂ + O₂',
        type: 'Decomposition',
        description: 'Electric current decomposes water into hydrogen and oxygen gases.',
        elements: [1, 8],
        conditions: 'Electric current, electrolyte',
        energy: 'Endothermic (+572 kJ/mol)'
    },
    {
        id: 8,
        name: 'Cellular Respiration',
        equation: 'C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O',
        type: 'Oxidation',
        description: 'Glucose is oxidized in cells to produce energy (ATP), carbon dioxide, and water.',
        elements: [6, 1, 8],
        conditions: 'Enzymes, body temperature',
        energy: 'Exothermic (-2800 kJ/mol)'
    }
];

// Quiz Questions - 题库1
const QUIZ_QUESTIONS = [
    {
        question: "What is the atomic number of Hydrogen?",
        options: ["1", "2", "3", "4"],
        correct: 0,
        element: 1
    },
    {
        question: "Which element has the symbol 'O'?",
        options: ["Osmium", "Oxygen", "Gold", "Silver"],
        correct: 1,
        element: 8
    },
    {
        question: "What is the most abundant element in the universe?",
        options: ["Oxygen", "Carbon", "Hydrogen", "Helium"],
        correct: 2,
        element: 1
    },
    {
        question: "Which element is essential for life and makes up 78% of Earth's atmosphere?",
        options: ["Oxygen", "Nitrogen", "Carbon", "Hydrogen"],
        correct: 1,
        element: 7
    },
    {
        question: "What is the symbol for Gold?",
        options: ["Go", "Gd", "Au", "Ag"],
        correct: 2,
        element: 47
    },
    {
        question: "Which element is the best electrical conductor?",
        options: ["Copper", "Gold", "Silver", "Aluminum"],
        correct: 2,
        element: 47
    },
    {
        question: "What is the atomic number of Carbon?",
        options: ["4", "6", "8", "12"],
        correct: 1,
        element: 6
    },
    {
        question: "Which element is used in batteries and has the symbol 'Li'?",
        options: ["Lead", "Lithium", "Lutetium", "Lawrencium"],
        correct: 1,
        element: 3
    },
    {
        question: "What is the only liquid nonmetal at room temperature?",
        options: ["Mercury", "Bromine", "Water", "Chlorine"],
        correct: 1,
        element: 35
    },
    {
        question: "Which noble gas is used in neon lights?",
        options: ["Helium", "Argon", "Neon", "Krypton"],
        correct: 2,
        element: 10
    },
    {
        question: "What is the main component of bones and teeth?",
        options: ["Sodium", "Potassium", "Calcium", "Magnesium"],
        correct: 2,
        element: 20
    },
    {
        question: "Which element has the highest atomic number in the periodic table?",
        options: ["Uranium", "Plutonium", "Oganesson", "Lawrencium"],
        correct: 2,
        element: 1
    },
    {
        question: "What is the symbol for Iron?",
        options: ["Ir", "Fe", "In", "Fr"],
        correct: 1,
        element: 26
    },
    {
        question: "Which element is the foundation of the semiconductor industry?",
        options: ["Carbon", "Silicon", "Germanium", "Tin"],
        correct: 1,
        element: 14
    },
    {
        question: "What is the most abundant metal in Earth's crust?",
        options: ["Iron", "Aluminum", "Copper", "Zinc"],
        correct: 1,
        element: 13
    }
];

// Quiz Questions - 题库2
const QUIZ_QUESTIONS_BANK2 = [
    {
        question: "Which element is the main component of steel?",
        options: ["Carbon", "Iron", "Chromium", "Nickel"],
        correct: 1,
        element: 26
    },
    {
        question: "What is the lightest metal?",
        options: ["Aluminum", "Magnesium", "Lithium", "Beryllium"],
        correct: 2,
        element: 3
    },
    {
        question: "Which element is used in fluorescent lights?",
        options: ["Neon", "Argon", "Mercury", "Xenon"],
        correct: 2,
        element: 80
    },
    {
        question: "What is the atomic number of Sodium?",
        options: ["9", "11", "13", "15"],
        correct: 1,
        element: 11
    },
    {
        question: "Which element has the symbol 'Ag'?",
        options: ["Gold", "Silver", "Aluminum", "Argon"],
        correct: 1,
        element: 47
    },
    {
        question: "What is the most reactive alkali metal?",
        options: ["Lithium", "Sodium", "Potassium", "Cesium"],
        correct: 3,
        element: 55
    },
    {
        question: "Which element is essential for thyroid function?",
        options: ["Iron", "Iodine", "Calcium", "Zinc"],
        correct: 1,
        element: 53
    },
    {
        question: "What is the symbol for Copper?",
        options: ["Co", "Cr", "Cu", "Ce"],
        correct: 2,
        element: 29
    },
    {
        question: "Which noble gas is most abundant in the atmosphere?",
        options: ["Helium", "Neon", "Argon", "Krypton"],
        correct: 2,
        element: 18
    },
    {
        question: "What is the atomic number of Oxygen?",
        options: ["6", "7", "8", "9"],
        correct: 2,
        element: 8
    }
];

// Quiz Questions - 题库3
const QUIZ_QUESTIONS_BANK3 = [
    {
        question: "Which element is used in batteries with the symbol 'Li'?",
        options: ["Lead", "Lithium", "Lutetium", "Lawrencium"],
        correct: 1,
        element: 3
    },
    {
        question: "What is the hardest natural substance?",
        options: ["Diamond (Carbon)", "Corundum", "Quartz", "Topaz"],
        correct: 0,
        element: 6
    },
    {
        question: "Which element is liquid at room temperature besides mercury?",
        options: ["Gallium", "Bromine", "Cesium", "Francium"],
        correct: 1,
        element: 35
    },
    {
        question: "What is the symbol for Potassium?",
        options: ["P", "Po", "K", "Pt"],
        correct: 2,
        element: 19
    },
    {
        question: "Which element is the main component of natural gas?",
        options: ["Hydrogen", "Carbon", "Nitrogen", "Oxygen"],
        correct: 1,
        element: 6
    },
    {
        question: "What is the atomic number of Nitrogen?",
        options: ["5", "6", "7", "8"],
        correct: 2,
        element: 7
    },
    {
        question: "Which element is used in thermometers?",
        options: ["Silver", "Mercury", "Aluminum", "Zinc"],
        correct: 1,
        element: 80
    },
    {
        question: "What is the symbol for Tungsten?",
        options: ["Tu", "Tn", "W", "Tg"],
        correct: 2,
        element: 74
    },
    {
        question: "Which element is essential for hemoglobin?",
        options: ["Copper", "Iron", "Zinc", "Manganese"],
        correct: 1,
        element: 26
    },
    {
        question: "What is the most abundant element in the human body?",
        options: ["Carbon", "Hydrogen", "Oxygen", "Nitrogen"],
        correct: 2,
        element: 8
    }
];
