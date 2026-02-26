// Mock scan data with realistic products
const mockScanDetails = {
    1: {
        id: 1,
        datetime: new Date(Date.now() - 2 * 60 * 60 * 1000),
        category: 'Beverages',
        products: [
            // Coca-Cola Products - 12 Pack
            { id: 'P100001', name: 'Coca-Cola Classic 12 Pack 12oz', brand: 'Coca-Cola', availability: 'in-stock', facings: 40, images: 3, emoji: '🥤' },
            { id: 'P100002', name: 'Coca-Cola Zero Sugar 12 Pack 12oz', brand: 'Coca-Cola', availability: 'in-stock', facings: 36, images: 3, emoji: '🥤' },
            { id: 'P100003', name: 'Diet Coke 12 Pack 12oz', brand: 'Coca-Cola', availability: 'in-stock', facings: 38, images: 3, emoji: '🥤' },
            { id: 'P100004', name: 'Sprite 12 Pack 12oz', brand: 'Coca-Cola', availability: 'in-stock', facings: 32, images: 3, emoji: '🥤' },
            { id: 'P100005', name: 'Sprite Zero Sugar 12 Pack 12oz', brand: 'Coca-Cola', availability: 'in-stock', facings: 28, images: 2, emoji: '🥤' },
            { id: 'P100006', name: 'Fanta Orange 12 Pack 12oz', brand: 'Coca-Cola', availability: 'in-stock', facings: 24, images: 2, emoji: '🥤' },
            { id: 'P100007', name: 'Fanta Grape 12 Pack 12oz', brand: 'Coca-Cola', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🥤' },
            { id: 'P100008', name: 'Barq\'s Root Beer 12 Pack 12oz', brand: 'Coca-Cola', availability: 'in-stock', facings: 20, images: 2, emoji: '🥤' },
            { id: 'P100009', name: 'Mello Yello 12 Pack 12oz', brand: 'Coca-Cola', availability: 'in-stock', facings: 16, images: 2, emoji: '🥤' },
            { id: 'P100010', name: 'Minute Maid Lemonade 12 Pack 12oz', brand: 'Coca-Cola', availability: 'in-stock', facings: 22, images: 2, emoji: '🍋' },

            // Coca-Cola Products - 2 Liter
            { id: 'P100011', name: 'Coca-Cola Classic 2L', brand: 'Coca-Cola', availability: 'in-stock', facings: 30, images: 2, emoji: '🥤' },
            { id: 'P100012', name: 'Coca-Cola Zero Sugar 2L', brand: 'Coca-Cola', availability: 'in-stock', facings: 26, images: 2, emoji: '🥤' },
            { id: 'P100013', name: 'Diet Coke 2L', brand: 'Coca-Cola', availability: 'in-stock', facings: 28, images: 2, emoji: '🥤' },
            { id: 'P100014', name: 'Sprite 2L', brand: 'Coca-Cola', availability: 'in-stock', facings: 24, images: 2, emoji: '🥤' },
            { id: 'P100015', name: 'Fanta Orange 2L', brand: 'Coca-Cola', availability: 'in-stock', facings: 18, images: 2, emoji: '🥤' },

            // Pepsi Products - 12 Pack
            { id: 'P100016', name: 'Pepsi Cola 12 Pack 12oz', brand: 'Pepsi', availability: 'in-stock', facings: 38, images: 3, emoji: '🥤' },
            { id: 'P100017', name: 'Pepsi Zero Sugar 12 Pack 12oz', brand: 'Pepsi', availability: 'in-stock', facings: 34, images: 3, emoji: '🥤' },
            { id: 'P100018', name: 'Diet Pepsi 12 Pack 12oz', brand: 'Pepsi', availability: 'in-stock', facings: 32, images: 2, emoji: '🥤' },
            { id: 'P100019', name: 'Mountain Dew 12 Pack 12oz', brand: 'Pepsi', availability: 'in-stock', facings: 36, images: 3, emoji: '🥤' },
            { id: 'P100020', name: 'Mountain Dew Zero Sugar 12 Pack 12oz', brand: 'Pepsi', availability: 'in-stock', facings: 28, images: 2, emoji: '🥤' },
            { id: 'P100021', name: 'Mountain Dew Code Red 12 Pack 12oz', brand: 'Pepsi', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🥤' },
            { id: 'P100022', name: 'Sierra Mist 12 Pack 12oz', brand: 'Pepsi', availability: 'in-stock', facings: 22, images: 2, emoji: '🥤' },
            { id: 'P100023', name: 'Mug Root Beer 12 Pack 12oz', brand: 'Pepsi', availability: 'in-stock', facings: 20, images: 2, emoji: '🥤' },
            { id: 'P100024', name: 'Crush Orange 12 Pack 12oz', brand: 'Pepsi', availability: 'in-stock', facings: 18, images: 2, emoji: '🥤' },
            { id: 'P100025', name: 'Crush Grape 12 Pack 12oz', brand: 'Pepsi', availability: 'in-stock', facings: 16, images: 2, emoji: '🥤' },

            // Pepsi Products - 2 Liter
            { id: 'P100026', name: 'Pepsi Cola 2L', brand: 'Pepsi', availability: 'in-stock', facings: 28, images: 2, emoji: '🥤' },
            { id: 'P100027', name: 'Pepsi Zero Sugar 2L', brand: 'Pepsi', availability: 'in-stock', facings: 24, images: 2, emoji: '🥤' },
            { id: 'P100028', name: 'Diet Pepsi 2L', brand: 'Pepsi', availability: 'in-stock', facings: 26, images: 2, emoji: '🥤' },
            { id: 'P100029', name: 'Mountain Dew 2L', brand: 'Pepsi', availability: 'in-stock', facings: 26, images: 2, emoji: '🥤' },
            { id: 'P100030', name: 'Sierra Mist 2L', brand: 'Pepsi', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🥤' },

            // Dr Pepper Products
            { id: 'P100031', name: 'Dr Pepper 12 Pack 12oz', brand: 'Dr Pepper', availability: 'in-stock', facings: 32, images: 3, emoji: '🥤' },
            { id: 'P100032', name: 'Dr Pepper Zero Sugar 12 Pack 12oz', brand: 'Dr Pepper', availability: 'in-stock', facings: 26, images: 2, emoji: '🥤' },
            { id: 'P100033', name: 'Diet Dr Pepper 12 Pack 12oz', brand: 'Dr Pepper', availability: 'in-stock', facings: 24, images: 2, emoji: '🥤' },
            { id: 'P100034', name: 'Dr Pepper 2L', brand: 'Dr Pepper', availability: 'in-stock', facings: 22, images: 2, emoji: '🥤' },
            { id: 'P100035', name: '7UP 12 Pack 12oz', brand: 'Dr Pepper', availability: 'in-stock', facings: 24, images: 2, emoji: '🥤' },
            { id: 'P100036', name: '7UP Zero Sugar 12 Pack 12oz', brand: 'Dr Pepper', availability: 'in-stock', facings: 20, images: 2, emoji: '🥤' },
            { id: 'P100037', name: '7UP 2L', brand: 'Dr Pepper', availability: 'in-stock', facings: 18, images: 2, emoji: '🥤' },
            { id: 'P100038', name: 'A&W Root Beer 12 Pack 12oz', brand: 'Dr Pepper', availability: 'in-stock', facings: 22, images: 2, emoji: '🥤' },
            { id: 'P100039', name: 'Canada Dry Ginger Ale 12 Pack 12oz', brand: 'Dr Pepper', availability: 'in-stock', facings: 20, images: 2, emoji: '🥤' },
            { id: 'P100040', name: 'Sunkist Orange 12 Pack 12oz', brand: 'Dr Pepper', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🥤' },

            // Sparkling Water - LaCroix
            { id: 'P100041', name: 'LaCroix Lime 12 Pack', brand: 'LaCroix', availability: 'in-stock', facings: 24, images: 3, emoji: '💧' },
            { id: 'P100042', name: 'LaCroix Pamplemousse 12 Pack', brand: 'LaCroix', availability: 'in-stock', facings: 22, images: 2, emoji: '💧' },
            { id: 'P100043', name: 'LaCroix Lemon 12 Pack', brand: 'LaCroix', availability: 'in-stock', facings: 20, images: 2, emoji: '💧' },
            { id: 'P100044', name: 'LaCroix Berry 12 Pack', brand: 'LaCroix', availability: 'in-stock', facings: 18, images: 2, emoji: '💧' },
            { id: 'P100045', name: 'LaCroix Tangerine 12 Pack', brand: 'LaCroix', availability: 'in-stock', facings: 16, images: 2, emoji: '💧' },
            { id: 'P100046', name: 'LaCroix Coconut 12 Pack', brand: 'LaCroix', availability: 'in-stock', facings: 14, images: 2, emoji: '💧' },

            // Sparkling Water - Bubly
            { id: 'P100047', name: 'Bubly Lime 12 Pack', brand: 'Bubly', availability: 'in-stock', facings: 22, images: 2, emoji: '💧' },
            { id: 'P100048', name: 'Bubly Grapefruit 12 Pack', brand: 'Bubly', availability: 'in-stock', facings: 20, images: 2, emoji: '💧' },
            { id: 'P100049', name: 'Bubly Strawberry 12 Pack', brand: 'Bubly', availability: 'out-of-stock', facings: 0, images: 1, emoji: '💧' },
            { id: 'P100050', name: 'Bubly Orange 12 Pack', brand: 'Bubly', availability: 'in-stock', facings: 18, images: 2, emoji: '💧' },
            { id: 'P100051', name: 'Bubly Cherry 12 Pack', brand: 'Bubly', availability: 'in-stock', facings: 16, images: 2, emoji: '💧' },
            { id: 'P100052', name: 'Bubly Mango 12 Pack', brand: 'Bubly', availability: 'in-stock', facings: 14, images: 2, emoji: '💧' },

            // Sparkling Water - Perrier & San Pellegrino
            { id: 'P100053', name: 'Perrier Original 12 Pack', brand: 'Perrier', availability: 'in-stock', facings: 18, images: 2, emoji: '💧' },
            { id: 'P100054', name: 'Perrier Lime 12 Pack', brand: 'Perrier', availability: 'in-stock', facings: 14, images: 2, emoji: '💧' },
            { id: 'P100055', name: 'San Pellegrino Sparkling 6 Pack', brand: 'San Pellegrino', availability: 'in-stock', facings: 16, images: 2, emoji: '💧' },
            { id: 'P100056', name: 'San Pellegrino Limonata 6 Pack', brand: 'San Pellegrino', availability: 'in-stock', facings: 14, images: 2, emoji: '🍋' },
            { id: 'P100057', name: 'San Pellegrino Aranciata 6 Pack', brand: 'San Pellegrino', availability: 'in-stock', facings: 12, images: 2, emoji: '🍊' },

            // Bottled Water
            { id: 'P100058', name: 'Dasani Purified Water 24 Pack', brand: 'Coca-Cola', availability: 'in-stock', facings: 32, images: 3, emoji: '💧' },
            { id: 'P100059', name: 'Aquafina Water 24 Pack', brand: 'Pepsi', availability: 'in-stock', facings: 30, images: 3, emoji: '💧' },
            { id: 'P100060', name: 'Poland Spring Water 24 Pack', brand: 'Poland Spring', availability: 'in-stock', facings: 28, images: 2, emoji: '💧' },
            { id: 'P100061', name: 'Fiji Natural Water 24 Pack', brand: 'Fiji', availability: 'out-of-stock', facings: 0, images: 1, emoji: '💧' },
            { id: 'P100062', name: 'Smartwater Vapor Distilled 6 Pack', brand: 'Smartwater', availability: 'in-stock', facings: 20, images: 2, emoji: '💧' },
            { id: 'P100063', name: 'Essentia Enhanced Water 12 Pack', brand: 'Essentia', availability: 'in-stock', facings: 16, images: 2, emoji: '💧' },

            // Energy Drinks - Red Bull
            { id: 'P100064', name: 'Red Bull Energy Drink 4 Pack 8.4oz', brand: 'Red Bull', availability: 'in-stock', facings: 28, images: 3, emoji: '⚡' },
            { id: 'P100065', name: 'Red Bull Sugar Free 4 Pack 8.4oz', brand: 'Red Bull', availability: 'in-stock', facings: 24, images: 2, emoji: '⚡' },
            { id: 'P100066', name: 'Red Bull Zero 4 Pack 8.4oz', brand: 'Red Bull', availability: 'in-stock', facings: 20, images: 2, emoji: '⚡' },
            { id: 'P100067', name: 'Red Bull Tropical 4 Pack 8.4oz', brand: 'Red Bull', availability: 'in-stock', facings: 16, images: 2, emoji: '⚡' },
            { id: 'P100068', name: 'Red Bull Watermelon 4 Pack 8.4oz', brand: 'Red Bull', availability: 'out-of-stock', facings: 0, images: 1, emoji: '⚡' },

            // Energy Drinks - Monster
            { id: 'P100069', name: 'Monster Energy Original 16oz', brand: 'Monster', availability: 'in-stock', facings: 32, images: 3, emoji: '⚡' },
            { id: 'P100070', name: 'Monster Energy Zero Ultra 16oz', brand: 'Monster', availability: 'in-stock', facings: 28, images: 3, emoji: '⚡' },
            { id: 'P100071', name: 'Monster Energy Ultra Sunrise 16oz', brand: 'Monster', availability: 'in-stock', facings: 24, images: 2, emoji: '⚡' },
            { id: 'P100072', name: 'Monster Energy Pipeline Punch 16oz', brand: 'Monster', availability: 'in-stock', facings: 20, images: 2, emoji: '⚡' },
            { id: 'P100073', name: 'Monster Energy Mango Loco 16oz', brand: 'Monster', availability: 'in-stock', facings: 18, images: 2, emoji: '⚡' },
            { id: 'P100074', name: 'Monster Energy Ultra Paradise 16oz', brand: 'Monster', availability: 'in-stock', facings: 16, images: 2, emoji: '⚡' },

            // Energy Drinks - Rockstar
            { id: 'P100075', name: 'Rockstar Energy Original 16oz', brand: 'Rockstar', availability: 'in-stock', facings: 20, images: 2, emoji: '⚡' },
            { id: 'P100076', name: 'Rockstar Energy Sugar Free 16oz', brand: 'Rockstar', availability: 'in-stock', facings: 16, images: 2, emoji: '⚡' },
            { id: 'P100077', name: 'Rockstar Punched 16oz', brand: 'Rockstar', availability: 'out-of-stock', facings: 0, images: 1, emoji: '⚡' },
            { id: 'P100078', name: 'Rockstar Pure Zero 16oz', brand: 'Rockstar', availability: 'in-stock', facings: 14, images: 2, emoji: '⚡' },

            // Energy Drinks - Bang
            { id: 'P100079', name: 'Bang Energy Rainbow Unicorn 16oz', brand: 'Bang', availability: 'in-stock', facings: 18, images: 2, emoji: '⚡' },
            { id: 'P100080', name: 'Bang Energy Sour Heads 16oz', brand: 'Bang', availability: 'in-stock', facings: 16, images: 2, emoji: '⚡' },
            { id: 'P100081', name: 'Bang Energy Blue Razz 16oz', brand: 'Bang', availability: 'in-stock', facings: 14, images: 2, emoji: '⚡' },
            { id: 'P100082', name: 'Bang Energy Peach Mango 16oz', brand: 'Bang', availability: 'in-stock', facings: 12, images: 2, emoji: '⚡' },

            // Sports Drinks - Gatorade
            { id: 'P100083', name: 'Gatorade Thirst Quencher Lemon-Lime 8 Pack', brand: 'Gatorade', availability: 'in-stock', facings: 30, images: 3, emoji: '🏃' },
            { id: 'P100084', name: 'Gatorade Thirst Quencher Fruit Punch 8 Pack', brand: 'Gatorade', availability: 'in-stock', facings: 28, images: 3, emoji: '🏃' },
            { id: 'P100085', name: 'Gatorade Thirst Quencher Orange 8 Pack', brand: 'Gatorade', availability: 'in-stock', facings: 26, images: 2, emoji: '🏃' },
            { id: 'P100086', name: 'Gatorade Zero Lemon-Lime 8 Pack', brand: 'Gatorade', availability: 'in-stock', facings: 24, images: 2, emoji: '🏃' },
            { id: 'P100087', name: 'Gatorade Zero Fruit Punch 8 Pack', brand: 'Gatorade', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🏃' },
            { id: 'P100088', name: 'Gatorade Fierce Grape 8 Pack', brand: 'Gatorade', availability: 'in-stock', facings: 22, images: 2, emoji: '🏃' },
            { id: 'P100089', name: 'Gatorade Glacier Freeze 8 Pack', brand: 'Gatorade', availability: 'in-stock', facings: 20, images: 2, emoji: '🏃' },

            // Sports Drinks - Powerade
            { id: 'P100090', name: 'Powerade Mountain Berry Blast 8 Pack', brand: 'Powerade', availability: 'in-stock', facings: 22, images: 2, emoji: '🏃' },
            { id: 'P100091', name: 'Powerade Fruit Punch 8 Pack', brand: 'Powerade', availability: 'in-stock', facings: 20, images: 2, emoji: '🏃' },
            { id: 'P100092', name: 'Powerade Zero Mixed Berry 8 Pack', brand: 'Powerade', availability: 'in-stock', facings: 18, images: 2, emoji: '🏃' },
            { id: 'P100093', name: 'Powerade Orange 8 Pack', brand: 'Powerade', availability: 'in-stock', facings: 16, images: 2, emoji: '🏃' },

            // Sports Drinks - BodyArmor
            { id: 'P100094', name: 'BodyArmor SuperDrink Fruit Punch 8 Pack', brand: 'BodyArmor', availability: 'in-stock', facings: 20, images: 2, emoji: '🏃' },
            { id: 'P100095', name: 'BodyArmor SuperDrink Tropical 8 Pack', brand: 'BodyArmor', availability: 'in-stock', facings: 18, images: 2, emoji: '🏃' },
            { id: 'P100096', name: 'BodyArmor Lyte Peach Mango 8 Pack', brand: 'BodyArmor', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🏃' },
            { id: 'P100097', name: 'BodyArmor Lyte Blueberry Pomegranate 8 Pack', brand: 'BodyArmor', availability: 'in-stock', facings: 14, images: 2, emoji: '🏃' },

            // Juice - Orange
            { id: 'P100098', name: 'Tropicana Pure Premium Orange Juice 52oz', brand: 'Tropicana', availability: 'in-stock', facings: 28, images: 3, emoji: '🍊' },
            { id: 'P100099', name: 'Tropicana No Pulp Orange Juice 52oz', brand: 'Tropicana', availability: 'in-stock', facings: 26, images: 2, emoji: '🍊' },
            { id: 'P100100', name: 'Tropicana Lots of Pulp Orange Juice 52oz', brand: 'Tropicana', availability: 'in-stock', facings: 22, images: 2, emoji: '🍊' },
            { id: 'P100101', name: 'Simply Orange Juice 52oz', brand: 'Simply', availability: 'in-stock', facings: 24, images: 2, emoji: '🍊' },
            { id: 'P100102', name: 'Minute Maid Orange Juice 59oz', brand: 'Minute Maid', availability: 'in-stock', facings: 20, images: 2, emoji: '🍊' },
            { id: 'P100103', name: 'Florida\'s Natural Orange Juice 52oz', brand: 'Florida\'s Natural', availability: 'in-stock', facings: 18, images: 2, emoji: '🍊' },

            // Juice - Apple
            { id: 'P100104', name: 'Martinelli\'s Apple Juice 64oz', brand: 'Martinelli\'s', availability: 'in-stock', facings: 20, images: 2, emoji: '🍎' },
            { id: 'P100105', name: 'Mott\'s 100% Apple Juice 64oz', brand: 'Mott\'s', availability: 'in-stock', facings: 22, images: 2, emoji: '🍎' },
            { id: 'P100106', name: 'Tree Top Apple Juice 64oz', brand: 'Tree Top', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🍎' },
            { id: 'P100107', name: 'Simply Apple Juice 52oz', brand: 'Simply', availability: 'in-stock', facings: 18, images: 2, emoji: '🍎' },

            // Juice - Cranberry
            { id: 'P100108', name: 'Ocean Spray Cranberry Juice 64oz', brand: 'Ocean Spray', availability: 'in-stock', facings: 22, images: 2, emoji: '🍒' },
            { id: 'P100109', name: 'Ocean Spray Cran-Grape 64oz', brand: 'Ocean Spray', availability: 'in-stock', facings: 18, images: 2, emoji: '🍇' },
            { id: 'P100110', name: 'Ocean Spray Cran-Apple 64oz', brand: 'Ocean Spray', availability: 'in-stock', facings: 16, images: 2, emoji: '🍎' },
            { id: 'P100111', name: 'Ocean Spray Cran-Raspberry 64oz', brand: 'Ocean Spray', availability: 'in-stock', facings: 14, images: 2, emoji: '🍓' },

            // Juice - Grape
            { id: 'P100112', name: 'Welch\'s 100% Grape Juice 64oz', brand: 'Welch\'s', availability: 'in-stock', facings: 20, images: 2, emoji: '🍇' },
            { id: 'P100113', name: 'Welch\'s White Grape Juice 64oz', brand: 'Welch\'s', availability: 'in-stock', facings: 16, images: 2, emoji: '🍇' },
            { id: 'P100114', name: 'Welch\'s Grape Cherry 64oz', brand: 'Welch\'s', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🍇' },

            // Juice - Lemonade
            { id: 'P100115', name: 'Simply Lemonade 52oz', brand: 'Simply', availability: 'in-stock', facings: 24, images: 2, emoji: '🍋' },
            { id: 'P100116', name: 'Minute Maid Lemonade 52oz', brand: 'Minute Maid', availability: 'in-stock', facings: 22, images: 2, emoji: '🍋' },
            { id: 'P100117', name: 'Country Time Lemonade 64oz', brand: 'Country Time', availability: 'in-stock', facings: 18, images: 2, emoji: '🍋' },
            { id: 'P100118', name: 'Newman\'s Own Lemonade 59oz', brand: 'Newman\'s Own', availability: 'in-stock', facings: 14, images: 2, emoji: '🍋' },

            // Tea - Iced Tea
            { id: 'P100119', name: 'Lipton Pure Leaf Sweet Tea 18.5oz', brand: 'Lipton', availability: 'in-stock', facings: 26, images: 2, emoji: '🍵' },
            { id: 'P100120', name: 'Lipton Pure Leaf Unsweetened Tea 18.5oz', brand: 'Lipton', availability: 'in-stock', facings: 22, images: 2, emoji: '🍵' },
            { id: 'P100121', name: 'Gold Peak Sweet Tea 18.5oz', brand: 'Gold Peak', availability: 'in-stock', facings: 24, images: 2, emoji: '🍵' },
            { id: 'P100122', name: 'Gold Peak Unsweetened Tea 18.5oz', brand: 'Gold Peak', availability: 'in-stock', facings: 20, images: 2, emoji: '🍵' },
            { id: 'P100123', name: 'Arizona Green Tea 23oz', brand: 'Arizona', availability: 'in-stock', facings: 28, images: 3, emoji: '🍵' },
            { id: 'P100124', name: 'Arizona Sweet Tea 23oz', brand: 'Arizona', availability: 'in-stock', facings: 24, images: 2, emoji: '🍵' },
            { id: 'P100125', name: 'Arizona Arnold Palmer 23oz', brand: 'Arizona', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🍵' },
            { id: 'P100126', name: 'Snapple Peach Tea 16oz', brand: 'Snapple', availability: 'in-stock', facings: 18, images: 2, emoji: '🍵' },
            { id: 'P100127', name: 'Snapple Lemon Tea 16oz', brand: 'Snapple', availability: 'in-stock', facings: 16, images: 2, emoji: '🍵' },

            // Coffee Drinks
            { id: 'P100128', name: 'Starbucks Doubleshot Espresso 6.5oz 4pk', brand: 'Starbucks', availability: 'in-stock', facings: 24, images: 3, emoji: '☕' },
            { id: 'P100129', name: 'Starbucks Frappuccino Mocha 13.7oz 4pk', brand: 'Starbucks', availability: 'in-stock', facings: 22, images: 2, emoji: '☕' },
            { id: 'P100130', name: 'Starbucks Frappuccino Vanilla 13.7oz 4pk', brand: 'Starbucks', availability: 'in-stock', facings: 20, images: 2, emoji: '☕' },
            { id: 'P100131', name: 'Starbucks Iced Coffee Unsweetened 48oz', brand: 'Starbucks', availability: 'in-stock', facings: 18, images: 2, emoji: '☕' },
            { id: 'P100132', name: 'Dunkin\' Donuts Iced Coffee 13.7oz', brand: 'Dunkin\'', availability: 'in-stock', facings: 20, images: 2, emoji: '☕' },
            { id: 'P100133', name: 'Dunkin\' Donuts Caramel Macchiato 13.7oz', brand: 'Dunkin\'', availability: 'out-of-stock', facings: 0, images: 1, emoji: '☕' },
            { id: 'P100134', name: 'La Colombe Triple Draft Latte 9oz', brand: 'La Colombe', availability: 'in-stock', facings: 16, images: 2, emoji: '☕' },
            { id: 'P100135', name: 'Califia Farms Cold Brew Coffee 10.5oz', brand: 'Califia Farms', availability: 'in-stock', facings: 14, images: 2, emoji: '☕' },

            // Kombucha
            { id: 'P100136', name: 'GT\'s Synergy Gingerade 16oz', brand: 'GT\'s', availability: 'in-stock', facings: 16, images: 2, emoji: '🍹' },
            { id: 'P100137', name: 'GT\'s Synergy Trilogy 16oz', brand: 'GT\'s', availability: 'in-stock', facings: 14, images: 2, emoji: '🍹' },
            { id: 'P100138', name: 'Health-Ade Pink Lady Apple 16oz', brand: 'Health-Ade', availability: 'in-stock', facings: 12, images: 2, emoji: '🍹' },
            { id: 'P100139', name: 'Kevita Master Brew Ginger 15.2oz', brand: 'Kevita', availability: 'in-stock', facings: 10, images: 2, emoji: '🍹' },

            // Plant-Based Milk
            { id: 'P100140', name: 'Silk Almond Milk Unsweetened 64oz', brand: 'Silk', availability: 'in-stock', facings: 24, images: 2, emoji: '🥛' },
            { id: 'P100141', name: 'Silk Almond Milk Vanilla 64oz', brand: 'Silk', availability: 'in-stock', facings: 20, images: 2, emoji: '🥛' },
            { id: 'P100142', name: 'Silk Oat Yeah Oatmilk 64oz', brand: 'Silk', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🥛' },
            { id: 'P100143', name: 'Almond Breeze Unsweetened 64oz', brand: 'Almond Breeze', availability: 'in-stock', facings: 18, images: 2, emoji: '🥛' },
            { id: 'P100144', name: 'Almond Breeze Vanilla 64oz', brand: 'Almond Breeze', availability: 'in-stock', facings: 16, images: 2, emoji: '🥛' },
            { id: 'P100145', name: 'Oatly Oat Milk Original 64oz', brand: 'Oatly', availability: 'in-stock', facings: 20, images: 2, emoji: '🥛' },
            { id: 'P100146', name: 'Oatly Oat Milk Barista 32oz', brand: 'Oatly', availability: 'in-stock', facings: 16, images: 2, emoji: '🥛' },
            { id: 'P100147', name: 'Chobani Oat Milk Plain 52oz', brand: 'Chobani', availability: 'in-stock', facings: 14, images: 2, emoji: '🥛' },
            { id: 'P100148', name: 'Califia Farms Almond Milk 48oz', brand: 'Califia Farms', availability: 'in-stock', facings: 12, images: 2, emoji: '🥛' },

            // Coconut Water
            { id: 'P100149', name: 'Vita Coco Coconut Water 16.9oz', brand: 'Vita Coco', availability: 'in-stock', facings: 18, images: 2, emoji: '🥥' },
            { id: 'P100150', name: 'Zico Coconut Water 16.9oz', brand: 'Zico', availability: 'in-stock', facings: 14, images: 2, emoji: '🥥' },
            { id: 'P100151', name: 'Harmless Harvest Coconut Water 16oz', brand: 'Harmless Harvest', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🥥' },

            // Enhanced Water
            { id: 'P100152', name: 'Vitamin Water XXX Acai-Blueberry 20oz', brand: 'Vitamin Water', availability: 'in-stock', facings: 20, images: 2, emoji: '💧' },
            { id: 'P100153', name: 'Vitamin Water Zero Sugar XXX 20oz', brand: 'Vitamin Water', availability: 'in-stock', facings: 18, images: 2, emoji: '💧' },
            { id: 'P100154', name: 'Vitamin Water Power-C Dragonfruit 20oz', brand: 'Vitamin Water', availability: 'in-stock', facings: 16, images: 2, emoji: '💧' },
            { id: 'P100155', name: 'Propel Water Berry 16.9oz', brand: 'Propel', availability: 'in-stock', facings: 18, images: 2, emoji: '💧' },
            { id: 'P100156', name: 'Propel Water Kiwi Strawberry 16.9oz', brand: 'Propel', availability: 'in-stock', facings: 14, images: 2, emoji: '💧' },

            // Milk Drinks
            { id: 'P100157', name: 'Fairlife Ultra-Filtered Milk 2% 52oz', brand: 'Fairlife', availability: 'in-stock', facings: 22, images: 2, emoji: '🥛' },
            { id: 'P100158', name: 'Fairlife Chocolate Milk 14oz', brand: 'Fairlife', availability: 'in-stock', facings: 20, images: 2, emoji: '🥛' },
            { id: 'P100159', name: 'Core Power Vanilla Protein Shake 14oz', brand: 'Core Power', availability: 'in-stock', facings: 18, images: 2, emoji: '🥛' },
            { id: 'P100160', name: 'Core Power Chocolate Protein Shake 14oz', brand: 'Core Power', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🥛' },
            { id: 'P100161', name: 'Muscle Milk Vanilla Creme 14oz', brand: 'Muscle Milk', availability: 'in-stock', facings: 16, images: 2, emoji: '🥛' },
            { id: 'P100162', name: 'Premier Protein Chocolate Shake 11oz', brand: 'Premier Protein', availability: 'in-stock', facings: 14, images: 2, emoji: '🥛' },

            // Fruit Drinks
            { id: 'P100163', name: 'Capri Sun Fruit Punch 10 Pack', brand: 'Capri Sun', availability: 'in-stock', facings: 24, images: 2, emoji: '🧃' },
            { id: 'P100164', name: 'Capri Sun Pacific Cooler 10 Pack', brand: 'Capri Sun', availability: 'in-stock', facings: 20, images: 2, emoji: '🧃' },
            { id: 'P100165', name: 'Sunny D Tangy Original 64oz', brand: 'Sunny D', availability: 'in-stock', facings: 18, images: 2, emoji: '🍊' },
            { id: 'P100166', name: 'Hawaiian Punch Fruit Juicy Red 1 Gallon', brand: 'Hawaiian Punch', availability: 'in-stock', facings: 16, images: 2, emoji: '🍹' },
            { id: 'P100167', name: 'V8 Original 100% Vegetable Juice 46oz', brand: 'V8', availability: 'in-stock', facings: 14, images: 2, emoji: '🥕' },
            { id: 'P100168', name: 'V8 Splash Berry Blend 64oz', brand: 'V8', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🍓' },

            // Specialty Beverages
            { id: 'P100169', name: 'Bai Antioxidant Brasilia Blueberry 18oz', brand: 'Bai', availability: 'in-stock', facings: 12, images: 2, emoji: '🫐' },
            { id: 'P100170', name: 'Hint Water Watermelon 16oz', brand: 'Hint', availability: 'in-stock', facings: 10, images: 2, emoji: '🍉' },
            { id: 'P100171', name: 'Spindrift Lemon 8 Pack', brand: 'Spindrift', availability: 'in-stock', facings: 14, images: 2, emoji: '🍋' },
            { id: 'P100172', name: 'Spindrift Grapefruit 8 Pack', brand: 'Spindrift', availability: 'in-stock', facings: 12, images: 2, emoji: '🍊' },
            { id: 'P100173', name: 'Zevia Zero Calorie Soda Cola 6 Pack', brand: 'Zevia', availability: 'in-stock', facings: 10, images: 2, emoji: '🥤' },
            { id: 'P100174', name: 'Zevia Zero Calorie Ginger Root Beer 6 Pack', brand: 'Zevia', availability: 'in-stock', facings: 8, images: 2, emoji: '🥤' },
            { id: 'P100175', name: 'IZZE Sparkling Clementine 4 Pack', brand: 'IZZE', availability: 'in-stock', facings: 12, images: 2, emoji: '🍊' },
            { id: 'P100176', name: 'Honest Tea Organic Honey Green 16.9oz', brand: 'Honest Tea', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🍵' },
            { id: 'P100177', name: 'Martinelli\'s Sparkling Apple Cider 25.4oz', brand: 'Martinelli\'s', availability: 'in-stock', facings: 14, images: 2, emoji: '🍎' },
            { id: 'P100178', name: 'Reed\'s Ginger Beer Original 4 Pack', brand: 'Reed\'s', availability: 'in-stock', facings: 10, images: 2, emoji: '🥤' },
            { id: 'P100179', name: 'Fever-Tree Ginger Beer 4 Pack', brand: 'Fever-Tree', availability: 'in-stock', facings: 8, images: 2, emoji: '🥤' },
            { id: 'P100180', name: 'Topo Chico Sparkling Mineral Water 12 Pack', brand: 'Topo Chico', availability: 'in-stock', facings: 16, images: 2, emoji: '💧' },
            { id: 'P100181', name: 'Liquid Death Mountain Water 16.9oz', brand: 'Liquid Death', availability: 'in-stock', facings: 14, images: 2, emoji: '💧' },
            { id: 'P100182', name: 'Polar Seltzer Original 12 Pack', brand: 'Polar', availability: 'in-stock', facings: 12, images: 2, emoji: '💧' }
        ]
    },
    2: {
        id: 2,
        datetime: new Date(Date.now() - 5 * 60 * 60 * 1000),
        category: 'Snacks',
        products: [
            // Potato Chips - Lay's
            { id: 'P200001', name: 'Lay\'s Classic Potato Chips Family Size', brand: 'Lay\'s', availability: 'in-stock', facings: 36, images: 3, emoji: '🥔' },
            { id: 'P200002', name: 'Lay\'s Classic Potato Chips Regular', brand: 'Lay\'s', availability: 'in-stock', facings: 32, images: 3, emoji: '🥔' },
            { id: 'P200003', name: 'Lay\'s Barbecue Potato Chips Family Size', brand: 'Lay\'s', availability: 'in-stock', facings: 30, images: 2, emoji: '🥔' },
            { id: 'P200004', name: 'Lay\'s Barbecue Potato Chips Regular', brand: 'Lay\'s', availability: 'in-stock', facings: 28, images: 2, emoji: '🥔' },
            { id: 'P200005', name: 'Lay\'s Sour Cream & Onion Family Size', brand: 'Lay\'s', availability: 'in-stock', facings: 26, images: 2, emoji: '🥔' },
            { id: 'P200006', name: 'Lay\'s Cheddar & Sour Cream', brand: 'Lay\'s', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🥔' },
            { id: 'P200007', name: 'Lay\'s Salt & Vinegar', brand: 'Lay\'s', availability: 'in-stock', facings: 24, images: 2, emoji: '🥔' },
            { id: 'P200008', name: 'Lay\'s Honey Barbecue', brand: 'Lay\'s', availability: 'in-stock', facings: 20, images: 2, emoji: '🥔' },
            { id: 'P200009', name: 'Lay\'s Kettle Cooked Original', brand: 'Lay\'s', availability: 'in-stock', facings: 22, images: 2, emoji: '🥔' },
            { id: 'P200010', name: 'Lay\'s Limon', brand: 'Lay\'s', availability: 'in-stock', facings: 18, images: 2, emoji: '🥔' },
            { id: 'P200011', name: 'Lay\'s Wavy Original', brand: 'Lay\'s', availability: 'in-stock', facings: 24, images: 2, emoji: '🥔' },
            { id: 'P200012', name: 'Lay\'s Wavy Ranch', brand: 'Lay\'s', availability: 'in-stock', facings: 20, images: 2, emoji: '🥔' },
            { id: 'P200013', name: 'Lay\'s Baked Original', brand: 'Lay\'s', availability: 'in-stock', facings: 16, images: 2, emoji: '🥔' },
            { id: 'P200014', name: 'Lay\'s Baked Barbecue', brand: 'Lay\'s', availability: 'in-stock', facings: 14, images: 2, emoji: '🥔' },

            // Potato Chips - Ruffles
            { id: 'P200015', name: 'Ruffles Original Family Size', brand: 'Ruffles', availability: 'in-stock', facings: 28, images: 3, emoji: '🥔' },
            { id: 'P200016', name: 'Ruffles Cheddar & Sour Cream', brand: 'Ruffles', availability: 'in-stock', facings: 26, images: 2, emoji: '🥔' },
            { id: 'P200017', name: 'Ruffles Sour Cream & Onion', brand: 'Ruffles', availability: 'in-stock', facings: 22, images: 2, emoji: '🥔' },
            { id: 'P200018', name: 'Ruffles Queso', brand: 'Ruffles', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🥔' },
            { id: 'P200019', name: 'Ruffles All Dressed', brand: 'Ruffles', availability: 'in-stock', facings: 18, images: 2, emoji: '🥔' },

            // Potato Chips - Pringles
            { id: 'P200020', name: 'Pringles Original', brand: 'Pringles', availability: 'in-stock', facings: 30, images: 3, emoji: '🥔' },
            { id: 'P200021', name: 'Pringles Sour Cream & Onion', brand: 'Pringles', availability: 'in-stock', facings: 26, images: 2, emoji: '🥔' },
            { id: 'P200022', name: 'Pringles Cheddar Cheese', brand: 'Pringles', availability: 'in-stock', facings: 24, images: 2, emoji: '🥔' },
            { id: 'P200023', name: 'Pringles BBQ', brand: 'Pringles', availability: 'in-stock', facings: 20, images: 2, emoji: '🥔' },
            { id: 'P200024', name: 'Pringles Pizza', brand: 'Pringles', availability: 'in-stock', facings: 18, images: 2, emoji: '🥔' },
            { id: 'P200025', name: 'Pringles Ranch', brand: 'Pringles', availability: 'in-stock', facings: 16, images: 2, emoji: '🥔' },

            // Potato Chips - Kettle Brand
            { id: 'P200026', name: 'Kettle Brand Sea Salt', brand: 'Kettle Brand', availability: 'in-stock', facings: 20, images: 2, emoji: '🥔' },
            { id: 'P200027', name: 'Kettle Brand Sea Salt & Vinegar', brand: 'Kettle Brand', availability: 'in-stock', facings: 18, images: 2, emoji: '🥔' },
            { id: 'P200028', name: 'Kettle Brand Honey Dijon', brand: 'Kettle Brand', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🥔' },
            { id: 'P200029', name: 'Kettle Brand Jalapeno', brand: 'Kettle Brand', availability: 'in-stock', facings: 14, images: 2, emoji: '🥔' },

            // Tortilla Chips - Doritos
            { id: 'P200030', name: 'Doritos Nacho Cheese Family Size', brand: 'Doritos', availability: 'in-stock', facings: 40, images: 3, emoji: '🌮' },
            { id: 'P200031', name: 'Doritos Nacho Cheese Regular', brand: 'Doritos', availability: 'in-stock', facings: 36, images: 3, emoji: '🌮' },
            { id: 'P200032', name: 'Doritos Cool Ranch Family Size', brand: 'Doritos', availability: 'in-stock', facings: 38, images: 3, emoji: '🌮' },
            { id: 'P200033', name: 'Doritos Cool Ranch Regular', brand: 'Doritos', availability: 'in-stock', facings: 32, images: 2, emoji: '🌮' },
            { id: 'P200034', name: 'Doritos Spicy Nacho', brand: 'Doritos', availability: 'in-stock', facings: 28, images: 2, emoji: '🌮' },
            { id: 'P200035', name: 'Doritos Flamin\' Hot Nacho', brand: 'Doritos', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🌮' },
            { id: 'P200036', name: 'Doritos Tapatio', brand: 'Doritos', availability: 'in-stock', facings: 22, images: 2, emoji: '🌮' },
            { id: 'P200037', name: 'Doritos Salsa Verde', brand: 'Doritos', availability: 'in-stock', facings: 20, images: 2, emoji: '🌮' },
            { id: 'P200038', name: 'Doritos Dinamita Chile Limon', brand: 'Doritos', availability: 'in-stock', facings: 18, images: 2, emoji: '🌮' },

            // Tortilla Chips - Tostitos
            { id: 'P200039', name: 'Tostitos Scoops Party Size', brand: 'Tostitos', availability: 'in-stock', facings: 32, images: 3, emoji: '🌮' },
            { id: 'P200040', name: 'Tostitos Original Restaurant Style', brand: 'Tostitos', availability: 'in-stock', facings: 30, images: 3, emoji: '🌮' },
            { id: 'P200041', name: 'Tostitos Hint of Lime', brand: 'Tostitos', availability: 'in-stock', facings: 26, images: 2, emoji: '🌮' },
            { id: 'P200042', name: 'Tostitos Bite Size Rounds', brand: 'Tostitos', availability: 'in-stock', facings: 24, images: 2, emoji: '🌮' },
            { id: 'P200043', name: 'Tostitos Crispy Rounds', brand: 'Tostitos', availability: 'in-stock', facings: 20, images: 2, emoji: '🌮' },

            // Tortilla Chips - Other Brands
            { id: 'P200044', name: 'Taco Bell Fire Tortilla Chips', brand: 'Taco Bell', availability: 'in-stock', facings: 22, images: 2, emoji: '🌮' },
            { id: 'P200045', name: 'Takis Fuego', brand: 'Takis', availability: 'in-stock', facings: 28, images: 3, emoji: '🌮' },
            { id: 'P200046', name: 'Takis Blue Heat', brand: 'Takis', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🌮' },
            { id: 'P200047', name: 'On The Border Cantina Thins', brand: 'On The Border', availability: 'in-stock', facings: 16, images: 2, emoji: '🌮' },
            { id: 'P200048', name: 'Late July Sea Salt Thin & Crispy', brand: 'Late July', availability: 'in-stock', facings: 12, images: 2, emoji: '🌮' },

            // Pretzels
            { id: 'P200049', name: 'Snyder\'s of Hanover Mini Pretzels', brand: 'Snyder\'s', availability: 'in-stock', facings: 26, images: 2, emoji: '🥨' },
            { id: 'P200050', name: 'Snyder\'s of Hanover Sourdough', brand: 'Snyder\'s', availability: 'in-stock', facings: 22, images: 2, emoji: '🥨' },
            { id: 'P200051', name: 'Snyder\'s of Hanover Honey Wheat', brand: 'Snyder\'s', availability: 'in-stock', facings: 18, images: 2, emoji: '🥨' },
            { id: 'P200052', name: 'Snyder\'s Pretzel Pieces Honey Mustard', brand: 'Snyder\'s', availability: 'in-stock', facings: 20, images: 2, emoji: '🥨' },
            { id: 'P200053', name: 'Rold Gold Tiny Twists', brand: 'Rold Gold', availability: 'in-stock', facings: 24, images: 2, emoji: '🥨' },
            { id: 'P200054', name: 'Rold Gold Rods', brand: 'Rold Gold', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🥨' },
            { id: 'P200055', name: 'Dot\'s Homestyle Pretzels', brand: 'Dot\'s', availability: 'in-stock', facings: 18, images: 2, emoji: '🥨' },
            { id: 'P200056', name: 'Combos Cheddar Cheese Pretzel', brand: 'Combos', availability: 'in-stock', facings: 16, images: 2, emoji: '🥨' },

            // Popcorn
            { id: 'P200057', name: 'Smartfood White Cheddar', brand: 'Smartfood', availability: 'in-stock', facings: 30, images: 3, emoji: '🍿' },
            { id: 'P200058', name: 'Smartfood Movie Theater Butter', brand: 'Smartfood', availability: 'in-stock', facings: 26, images: 2, emoji: '🍿' },
            { id: 'P200059', name: 'SkinnyPop Original', brand: 'SkinnyPop', availability: 'in-stock', facings: 22, images: 2, emoji: '🍿' },
            { id: 'P200060', name: 'SkinnyPop White Cheddar', brand: 'SkinnyPop', availability: 'in-stock', facings: 18, images: 2, emoji: '🍿' },
            { id: 'P200061', name: 'Boom Chicka Pop Sea Salt', brand: 'Angie\'s', availability: 'in-stock', facings: 20, images: 2, emoji: '🍿' },
            { id: 'P200062', name: 'Boom Chicka Pop Sweet & Salty', brand: 'Angie\'s', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🍿' },
            { id: 'P200063', name: 'Orville Redenbacher\'s Butter', brand: 'Orville', availability: 'in-stock', facings: 24, images: 2, emoji: '🍿' },
            { id: 'P200064', name: 'Pop Secret Butter', brand: 'Pop Secret', availability: 'in-stock', facings: 20, images: 2, emoji: '🍿' },

            // Crackers - Cheez-It
            { id: 'P200065', name: 'Cheez-It Original', brand: 'Cheez-It', availability: 'in-stock', facings: 32, images: 3, emoji: '🧀' },
            { id: 'P200066', name: 'Cheez-It White Cheddar', brand: 'Cheez-It', availability: 'in-stock', facings: 28, images: 2, emoji: '🧀' },
            { id: 'P200067', name: 'Cheez-It Extra Toasty', brand: 'Cheez-It', availability: 'in-stock', facings: 24, images: 2, emoji: '🧀' },
            { id: 'P200068', name: 'Cheez-It Grooves Sharp White Cheddar', brand: 'Cheez-It', availability: 'in-stock', facings: 20, images: 2, emoji: '🧀' },
            { id: 'P200069', name: 'Cheez-It Snap\'d Double Cheese', brand: 'Cheez-It', availability: 'in-stock', facings: 16, images: 2, emoji: '🧀' },

            // Crackers - Other Brands
            { id: 'P200070', name: 'Goldfish Cheddar', brand: 'Goldfish', availability: 'in-stock', facings: 30, images: 3, emoji: '🐠' },
            { id: 'P200071', name: 'Goldfish Flavor Blasted Xtra Cheddar', brand: 'Goldfish', availability: 'in-stock', facings: 26, images: 2, emoji: '🐠' },
            { id: 'P200072', name: 'Wheat Thins Original', brand: 'Wheat Thins', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🌾' },
            { id: 'P200073', name: 'Triscuit Original', brand: 'Triscuit', availability: 'in-stock', facings: 20, images: 2, emoji: '🌾' },
            { id: 'P200074', name: 'Ritz Original', brand: 'Ritz', availability: 'in-stock', facings: 28, images: 2, emoji: '🍪' },
            { id: 'P200075', name: 'Ritz Toasted Chips', brand: 'Ritz', availability: 'in-stock', facings: 22, images: 2, emoji: '🍪' },
            { id: 'P200076', name: 'Club Crackers Original', brand: 'Club', availability: 'in-stock', facings: 18, images: 2, emoji: '🍪' },

            // Cookies - Oreo
            { id: 'P200077', name: 'Oreo Original Family Size', brand: 'Oreo', availability: 'in-stock', facings: 36, images: 3, emoji: '🍪' },
            { id: 'P200078', name: 'Oreo Double Stuf', brand: 'Oreo', availability: 'in-stock', facings: 32, images: 3, emoji: '🍪' },
            { id: 'P200079', name: 'Oreo Thins', brand: 'Oreo', availability: 'in-stock', facings: 26, images: 2, emoji: '🍪' },
            { id: 'P200080', name: 'Oreo Golden', brand: 'Oreo', availability: 'in-stock', facings: 22, images: 2, emoji: '🍪' },
            { id: 'P200081', name: 'Oreo Mega Stuf', brand: 'Oreo', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🍪' },

            // Cookies - Chips Ahoy
            { id: 'P200082', name: 'Chips Ahoy! Original', brand: 'Chips Ahoy!', availability: 'in-stock', facings: 30, images: 3, emoji: '🍪' },
            { id: 'P200083', name: 'Chips Ahoy! Chewy', brand: 'Chips Ahoy!', availability: 'in-stock', facings: 26, images: 2, emoji: '🍪' },
            { id: 'P200084', name: 'Chips Ahoy! Chunky', brand: 'Chips Ahoy!', availability: 'in-stock', facings: 22, images: 2, emoji: '🍪' },

            // Cookies - Other Brands
            { id: 'P200085', name: 'Nilla Wafers', brand: 'Nilla', availability: 'in-stock', facings: 24, images: 2, emoji: '🍪' },
            { id: 'P200086', name: 'Nutter Butter', brand: 'Nutter Butter', availability: 'in-stock', facings: 20, images: 2, emoji: '🥜' },
            { id: 'P200087', name: 'Milano Cookies', brand: 'Milano', availability: 'in-stock', facings: 18, images: 2, emoji: '🍪' },
            { id: 'P200088', name: 'Keebler Fudge Stripes', brand: 'Keebler', availability: 'in-stock', facings: 16, images: 2, emoji: '🍪' },
            { id: 'P200089', name: 'Famous Amos Chocolate Chip', brand: 'Famous Amos', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🍪' },

            // Nuts - Mixed
            { id: 'P200090', name: 'Planters Deluxe Mixed Nuts', brand: 'Planters', availability: 'in-stock', facings: 24, images: 2, emoji: '🥜' },
            { id: 'P200091', name: 'Planters Cashews Halves & Pieces', brand: 'Planters', availability: 'in-stock', facings: 20, images: 2, emoji: '🥜' },
            { id: 'P200092', name: 'Planters Dry Roasted Peanuts', brand: 'Planters', availability: 'in-stock', facings: 22, images: 2, emoji: '🥜' },
            { id: 'P200093', name: 'Planters Honey Roasted Peanuts', brand: 'Planters', availability: 'in-stock', facings: 18, images: 2, emoji: '🥜' },
            { id: 'P200094', name: 'Blue Diamond Almonds Sea Salt', brand: 'Blue Diamond', availability: 'in-stock', facings: 20, images: 2, emoji: '🥜' },
            { id: 'P200095', name: 'Blue Diamond Almonds Smokehouse', brand: 'Blue Diamond', availability: 'in-stock', facings: 16, images: 2, emoji: '🥜' },
            { id: 'P200096', name: 'Wonderful Pistachios Roasted Salted', brand: 'Wonderful', availability: 'in-stock', facings: 18, images: 2, emoji: '🥜' },
            { id: 'P200097', name: 'Emerald Almonds 100 Calorie Packs', brand: 'Emerald', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🥜' },

            // Granola Bars
            { id: 'P200098', name: 'Nature Valley Crunchy Oats \'n Honey', brand: 'Nature Valley', availability: 'in-stock', facings: 26, images: 3, emoji: '🌾' },
            { id: 'P200099', name: 'Nature Valley Chewy Trail Mix', brand: 'Nature Valley', availability: 'in-stock', facings: 22, images: 2, emoji: '🌾' },
            { id: 'P200100', name: 'Quaker Chewy Chocolate Chip', brand: 'Quaker', availability: 'in-stock', facings: 24, images: 2, emoji: '🌾' },
            { id: 'P200101', name: 'KIND Bars Dark Chocolate Nuts', brand: 'KIND', availability: 'in-stock', facings: 20, images: 2, emoji: '🌾' },
            { id: 'P200102', name: 'KIND Bars Peanut Butter', brand: 'KIND', availability: 'in-stock', facings: 18, images: 2, emoji: '🌾' },
            { id: 'P200103', name: 'Clif Bar Chocolate Chip', brand: 'Clif', availability: 'in-stock', facings: 16, images: 2, emoji: '🌾' },
            { id: 'P200104', name: 'RXBar Chocolate Sea Salt', brand: 'RXBAR', availability: 'in-stock', facings: 14, images: 2, emoji: '🌾' },

            // Candy Bars
            { id: 'P200105', name: 'Snickers Bar', brand: 'Snickers', availability: 'in-stock', facings: 30, images: 3, emoji: '🍫' },
            { id: 'P200106', name: 'M&M\'s Peanut', brand: 'M&M\'s', availability: 'in-stock', facings: 28, images: 3, emoji: '🍫' },
            { id: 'P200107', name: 'M&M\'s Milk Chocolate', brand: 'M&M\'s', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🍫' },
            { id: 'P200108', name: 'Reese\'s Peanut Butter Cups', brand: 'Reese\'s', availability: 'in-stock', facings: 32, images: 3, emoji: '🥜' },
            { id: 'P200109', name: 'Kit Kat Bar', brand: 'Kit Kat', availability: 'in-stock', facings: 26, images: 2, emoji: '🍫' },
            { id: 'P200110', name: 'Twix Caramel Cookie Bars', brand: 'Twix', availability: 'in-stock', facings: 24, images: 2, emoji: '🍫' },
            { id: 'P200111', name: 'Milky Way Bar', brand: 'Milky Way', availability: 'in-stock', facings: 22, images: 2, emoji: '🍫' },
            { id: 'P200112', name: '3 Musketeers Bar', brand: '3 Musketeers', availability: 'in-stock', facings: 18, images: 2, emoji: '🍫' },
            { id: 'P200113', name: 'Hershey\'s Milk Chocolate Bar', brand: 'Hershey\'s', availability: 'in-stock', facings: 24, images: 2, emoji: '🍫' },
            { id: 'P200114', name: 'Butterfinger Bar', brand: 'Butterfinger', availability: 'in-stock', facings: 20, images: 2, emoji: '🍫' },
            { id: 'P200115', name: 'Almond Joy', brand: 'Almond Joy', availability: 'in-stock', facings: 16, images: 2, emoji: '🥥' },
            { id: 'P200116', name: 'Mounds Bar', brand: 'Mounds', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🥥' },

            // Gummy Candy
            { id: 'P200117', name: 'Haribo Gold Bears', brand: 'Haribo', availability: 'in-stock', facings: 24, images: 2, emoji: '🐻' },
            { id: 'P200118', name: 'Haribo Twin Snakes', brand: 'Haribo', availability: 'in-stock', facings: 20, images: 2, emoji: '🐍' },
            { id: 'P200119', name: 'Trolli Sour Brite Crawlers', brand: 'Trolli', availability: 'in-stock', facings: 22, images: 2, emoji: '🐛' },
            { id: 'P200120', name: 'Swedish Fish', brand: 'Swedish Fish', availability: 'in-stock', facings: 18, images: 2, emoji: '🐟' },
            { id: 'P200121', name: 'Sour Patch Kids', brand: 'Sour Patch', availability: 'in-stock', facings: 20, images: 2, emoji: '👶' },
            { id: 'P200122', name: 'Skittles Original', brand: 'Skittles', availability: 'in-stock', facings: 24, images: 2, emoji: '🌈' },
            { id: 'P200123', name: 'Starburst Original', brand: 'Starburst', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🌟' },

            // Hard Candy & Mints
            { id: 'P200124', name: 'Werther\'s Original Caramels', brand: 'Werther\'s', availability: 'in-stock', facings: 16, images: 2, emoji: '🍬' },
            { id: 'P200125', name: 'Jolly Rancher Hard Candy', brand: 'Jolly Rancher', availability: 'in-stock', facings: 18, images: 2, emoji: '🍬' },
            { id: 'P200126', name: 'Life Savers Five Flavors', brand: 'Life Savers', availability: 'in-stock', facings: 14, images: 2, emoji: '🍬' },
            { id: 'P200127', name: 'Tic Tac Fresh Mint', brand: 'Tic Tac', availability: 'in-stock', facings: 20, images: 2, emoji: '🌿' },
            { id: 'P200128', name: 'Altoids Peppermint', brand: 'Altoids', availability: 'in-stock', facings: 16, images: 2, emoji: '🌿' },
            { id: 'P200129', name: 'Mentos Mint', brand: 'Mentos', availability: 'in-stock', facings: 14, images: 2, emoji: '🌿' },

            // Gum
            { id: 'P200130', name: 'Trident Original Flavor', brand: 'Trident', availability: 'in-stock', facings: 22, images: 2, emoji: '💚' },
            { id: 'P200131', name: 'Orbit Spearmint', brand: 'Orbit', availability: 'in-stock', facings: 20, images: 2, emoji: '💚' },
            { id: 'P200132', name: 'Extra Peppermint', brand: 'Extra', availability: 'out-of-stock', facings: 0, images: 1, emoji: '💚' },
            { id: 'P200133', name: '5 Gum Cobalt', brand: '5 Gum', availability: 'in-stock', facings: 16, images: 2, emoji: '💚' },

            // Jerky & Meat Snacks
            { id: 'P200134', name: 'Jack Link\'s Original Beef Jerky', brand: 'Jack Link\'s', availability: 'in-stock', facings: 20, images: 2, emoji: '🥩' },
            { id: 'P200135', name: 'Jack Link\'s Teriyaki Beef Jerky', brand: 'Jack Link\'s', availability: 'in-stock', facings: 18, images: 2, emoji: '🥩' },
            { id: 'P200136', name: 'Slim Jim Original', brand: 'Slim Jim', availability: 'in-stock', facings: 24, images: 2, emoji: '🌭' },
            { id: 'P200137', name: 'Oberto Beef Jerky Original', brand: 'Oberto', availability: 'in-stock', facings: 14, images: 2, emoji: '🥩' },
            { id: 'P200138', name: 'Chomps Grass-Fed Beef Stick', brand: 'Chomps', availability: 'in-stock', facings: 12, images: 2, emoji: '🥩' },

            // Rice Cakes & Crisps
            { id: 'P200139', name: 'Quaker Rice Cakes Lightly Salted', brand: 'Quaker', availability: 'in-stock', facings: 16, images: 2, emoji: '🍘' },
            { id: 'P200140', name: 'Quaker Rice Cakes Caramel', brand: 'Quaker', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🍘' },
            { id: 'P200141', name: 'Lundberg Rice Cakes Sea Salt', brand: 'Lundberg', availability: 'in-stock', facings: 12, images: 2, emoji: '🍘' },

            // Fruit Snacks
            { id: 'P200142', name: 'Welch\'s Mixed Fruit Snacks', brand: 'Welch\'s', availability: 'in-stock', facings: 22, images: 2, emoji: '🍇' },
            { id: 'P200143', name: 'Mott\'s Fruit Flavored Snacks', brand: 'Mott\'s', availability: 'in-stock', facings: 20, images: 2, emoji: '🍎' },
            { id: 'P200144', name: 'Annie\'s Organic Bunny Fruit Snacks', brand: 'Annie\'s', availability: 'in-stock', facings: 16, images: 2, emoji: '🐰' },

            // Trail Mix
            { id: 'P200145', name: 'Planters Trail Mix Nuts & Chocolate', brand: 'Planters', availability: 'in-stock', facings: 18, images: 2, emoji: '🥜' },
            { id: 'P200146', name: 'Sahale Glazed Mix Cashews Pomegranate', brand: 'Sahale', availability: 'in-stock', facings: 12, images: 2, emoji: '🥜' },

            // Veggie Chips & Straws
            { id: 'P200147', name: 'Veggie Straws Sea Salt', brand: 'Sensible Portions', availability: 'in-stock', facings: 20, images: 2, emoji: '🥕' },
            { id: 'P200148', name: 'Veggie Straws Ranch', brand: 'Sensible Portions', availability: 'in-stock', facings: 16, images: 2, emoji: '🥕' },
            { id: 'P200149', name: 'Terra Chips Original', brand: 'Terra', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🥕' },

            // Protein Bars
            { id: 'P200150', name: 'Quest Bar Chocolate Chip Cookie Dough', brand: 'Quest', availability: 'in-stock', facings: 16, images: 2, emoji: '💪' },
            { id: 'P200151', name: 'Pure Protein Bar Chocolate Peanut Butter', brand: 'Pure Protein', availability: 'in-stock', facings: 14, images: 2, emoji: '💪' },
            { id: 'P200152', name: 'Power Bar Peanut Butter', brand: 'PowerBar', availability: 'in-stock', facings: 12, images: 2, emoji: '💪' },

            // Cheese Snacks
            { id: 'P200153', name: 'Babybel Original', brand: 'Babybel', availability: 'in-stock', facings: 18, images: 2, emoji: '🧀' },
            { id: 'P200154', name: 'Sargento Balanced Breaks', brand: 'Sargento', availability: 'in-stock', facings: 16, images: 2, emoji: '🧀' },
            { id: 'P200155', name: 'String Cheese Mozzarella', brand: 'Frigo', availability: 'in-stock', facings: 20, images: 2, emoji: '🧀' },

            // Specialty Snacks
            { id: 'P200156', name: 'Pirate\'s Booty Aged White Cheddar', brand: 'Pirate\'s Booty', availability: 'in-stock', facings: 14, images: 2, emoji: '🏴‍☠️' },
            { id: 'P200157', name: 'Hippeas Vegan White Cheddar', brand: 'Hippeas', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🌿' },
            { id: 'P200158', name: 'SeaPoint Farms Dry Roasted Edamame', brand: 'SeaPoint Farms', availability: 'in-stock', facings: 10, images: 2, emoji: '🫛' },
            { id: 'P200159', name: 'PopCorners White Cheddar', brand: 'PopCorners', availability: 'in-stock', facings: 16, images: 2, emoji: '🌽' },
            { id: 'P200160', name: 'Beanitos Black Bean Chips', brand: 'Beanitos', availability: 'in-stock', facings: 12, images: 2, emoji: '🫘' },
            { id: 'P200161', name: 'Popchips Sea Salt', brand: 'Popchips', availability: 'in-stock', facings: 14, images: 2, emoji: '🥔' },
            { id: 'P200162', name: 'Simply Cheetos White Cheddar Puffs', brand: 'Cheetos', availability: 'in-stock', facings: 18, images: 2, emoji: '🧀' },
            { id: 'P200163', name: 'Cracker Jacks Original', brand: 'Cracker Jack', availability: 'in-stock', facings: 12, images: 2, emoji: '🍿' }
        ]
    },
    3: {
        id: 3,
        datetime: new Date(Date.now() - 8 * 60 * 60 * 1000),
        category: 'Pickles, Olives & Condiments',
        products: [
            // Pickles - Dill
            { id: 'P400001', name: 'Vlasic Kosher Dill Spears 24oz', brand: 'Vlasic', availability: 'in-stock', facings: 32, images: 3, emoji: '🥒' },
            { id: 'P400002', name: 'Vlasic Kosher Dill Whole Pickles 32oz', brand: 'Vlasic', availability: 'in-stock', facings: 28, images: 2, emoji: '🥒' },
            { id: 'P400003', name: 'Vlasic Kosher Dill Chips 16oz', brand: 'Vlasic', availability: 'in-stock', facings: 24, images: 2, emoji: '🥒' },
            { id: 'P400004', name: 'Vlasic Snack\'Mms Kosher Dill 3.5oz', brand: 'Vlasic', availability: 'in-stock', facings: 20, images: 2, emoji: '🥒' },
            { id: 'P400005', name: 'Claussen Kosher Dill Spears 24oz', brand: 'Claussen', availability: 'in-stock', facings: 30, images: 3, emoji: '🥒' },
            { id: 'P400006', name: 'Claussen Kosher Dill Halves 32oz', brand: 'Claussen', availability: 'in-stock', facings: 26, images: 2, emoji: '🥒' },
            { id: 'P400007', name: 'Claussen Kosher Dill Minis 20oz', brand: 'Claussen', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🥒' },
            { id: 'P400008', name: 'Mt. Olive Kosher Dill Spears 24oz', brand: 'Mt. Olive', availability: 'in-stock', facings: 22, images: 2, emoji: '🥒' },
            { id: 'P400009', name: 'Mt. Olive Kosher Baby Dills 16oz', brand: 'Mt. Olive', availability: 'in-stock', facings: 18, images: 2, emoji: '🥒' },
            { id: 'P400010', name: 'Signature SELECT Kosher Dill Spears 24oz', brand: 'Signature SELECT', availability: 'in-stock', facings: 28, images: 2, emoji: '🥒' },
            { id: 'P400011', name: 'Signature SELECT Kosher Dill Whole 32oz', brand: 'Signature SELECT', availability: 'in-stock', facings: 24, images: 2, emoji: '🥒' },
            { id: 'P400012', name: 'Signature SELECT Kosher Dill Chips 16oz', brand: 'Signature SELECT', availability: 'in-stock', facings: 20, images: 2, emoji: '🥒' },

            // Pickles - Bread & Butter
            { id: 'P400013', name: 'Vlasic Bread & Butter Chips 24oz', brand: 'Vlasic', availability: 'in-stock', facings: 26, images: 3, emoji: '🥒' },
            { id: 'P400014', name: 'Vlasic Bread & Butter Spears 24oz', brand: 'Vlasic', availability: 'in-stock', facings: 22, images: 2, emoji: '🥒' },
            { id: 'P400015', name: 'Claussen Bread & Butter Chips 20oz', brand: 'Claussen', availability: 'in-stock', facings: 24, images: 2, emoji: '🥒' },
            { id: 'P400016', name: 'Mt. Olive Bread & Butter Chips 24oz', brand: 'Mt. Olive', availability: 'in-stock', facings: 20, images: 2, emoji: '🥒' },
            { id: 'P400017', name: 'Signature SELECT Bread & Butter Chips 24oz', brand: 'Signature SELECT', availability: 'in-stock', facings: 22, images: 2, emoji: '🥒' },
            { id: 'P400018', name: 'Wickles Wicked Spicy Pickles 16oz', brand: 'Wickles', availability: 'in-stock', facings: 12, images: 2, emoji: '🥒' },

            // Pickles - Sweet & Other Varieties
            { id: 'P400019', name: 'Mt. Olive Sweet Gherkins 16oz', brand: 'Mt. Olive', availability: 'in-stock', facings: 16, images: 2, emoji: '🥒' },
            { id: 'P400020', name: 'Mt. Olive Sweet Relish 10oz', brand: 'Mt. Olive', availability: 'in-stock', facings: 14, images: 2, emoji: '🥒' },
            { id: 'P400021', name: 'Vlasic Sweet Gherkins 16oz', brand: 'Vlasic', availability: 'in-stock', facings: 18, images: 2, emoji: '🥒' },
            { id: 'P400022', name: 'Vlasic Zesty Dill Spears 24oz', brand: 'Vlasic', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🥒' },
            { id: 'P400023', name: 'Signature SELECT Sweet Relish 10oz', brand: 'Signature SELECT', availability: 'in-stock', facings: 16, images: 2, emoji: '🥒' },
            { id: 'P400024', name: 'Signature SELECT Dill Relish 10oz', brand: 'Signature SELECT', availability: 'in-stock', facings: 14, images: 2, emoji: '🥒' },
            { id: 'P400025', name: 'Bubbies Kosher Dill Pickles 33oz', brand: 'Bubbies', availability: 'in-stock', facings: 10, images: 2, emoji: '🥒' },
            { id: 'P400026', name: 'Bubbies Bread & Butter Pickles 25oz', brand: 'Bubbies', availability: 'in-stock', facings: 8, images: 2, emoji: '🥒' },

            // Olives - Black
            { id: 'P400027', name: 'Lindsay Sliced Black Olives 6oz', brand: 'Lindsay', availability: 'in-stock', facings: 40, images: 3, emoji: '🫒' },
            { id: 'P400028', name: 'Lindsay Whole Pitted Black Olives 6oz', brand: 'Lindsay', availability: 'in-stock', facings: 36, images: 3, emoji: '🫒' },
            { id: 'P400029', name: 'Lindsay Sliced Black Olives 2.25oz', brand: 'Lindsay', availability: 'in-stock', facings: 32, images: 2, emoji: '🫒' },
            { id: 'P400030', name: 'Lindsay Whole Pitted Black Olives 2.25oz', brand: 'Lindsay', availability: 'in-stock', facings: 28, images: 2, emoji: '🫒' },
            { id: 'P400031', name: 'Lindsay Large Pitted Black Olives 6oz', brand: 'Lindsay', availability: 'in-stock', facings: 24, images: 2, emoji: '🫒' },
            { id: 'P400032', name: 'Signature SELECT Sliced Black Olives 6oz', brand: 'Signature SELECT', availability: 'in-stock', facings: 30, images: 2, emoji: '🫒' },
            { id: 'P400033', name: 'Signature SELECT Whole Black Olives 6oz', brand: 'Signature SELECT', availability: 'in-stock', facings: 26, images: 2, emoji: '🫒' },
            { id: 'P400034', name: 'Signature SELECT Sliced Black Olives 2.25oz', brand: 'Signature SELECT', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🫒' },
            { id: 'P400035', name: 'Cento Sliced Black Olives 6oz', brand: 'CENTO', availability: 'in-stock', facings: 20, images: 2, emoji: '🫒' },
            { id: 'P400036', name: 'Cento Whole Black Olives 6oz', brand: 'CENTO', availability: 'in-stock', facings: 18, images: 2, emoji: '🫒' },

            // Olives - Green
            { id: 'P400037', name: 'Mezzetta Spanish Green Olives 10oz', brand: 'Mezzetta', availability: 'in-stock', facings: 22, images: 2, emoji: '🫒' },
            { id: 'P400038', name: 'Mezzetta Garlic Stuffed Olives 10oz', brand: 'Mezzetta', availability: 'in-stock', facings: 20, images: 2, emoji: '🫒' },
            { id: 'P400039', name: 'Mezzetta Pimento Stuffed Olives 10oz', brand: 'Mezzetta', availability: 'in-stock', facings: 18, images: 2, emoji: '🫒' },
            { id: 'P400040', name: 'Mezzetta Jalapeno Stuffed Olives 10oz', brand: 'Mezzetta', availability: 'in-stock', facings: 16, images: 2, emoji: '🫒' },
            { id: 'P400041', name: 'Signature SELECT Green Olives Pimento 10oz', brand: 'Signature SELECT', availability: 'in-stock', facings: 24, images: 2, emoji: '🫒' },
            { id: 'P400042', name: 'Signature SELECT Green Olives Plain 10oz', brand: 'Signature SELECT', availability: 'in-stock', facings: 20, images: 2, emoji: '🫒' },
            { id: 'P400043', name: 'Cento Pimento Stuffed Olives 7oz', brand: 'CENTO', availability: 'in-stock', facings: 18, images: 2, emoji: '🫒' },
            { id: 'P400044', name: 'Goya Manzanilla Olives Pimento 10oz', brand: 'Goya', availability: 'in-stock', facings: 16, images: 2, emoji: '🫒' },
            { id: 'P400045', name: 'Goya Manzanilla Olives Plain 10oz', brand: 'Goya', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🫒' },

            // Olives - Kalamata & Specialty
            { id: 'P400046', name: 'Peloponnese Kalamata Olives 7.9oz', brand: 'Peloponnese', availability: 'in-stock', facings: 20, images: 3, emoji: '🫒' },
            { id: 'P400047', name: 'Peloponnese Pitted Kalamata 7.9oz', brand: 'Peloponnese', availability: 'in-stock', facings: 18, images: 2, emoji: '🫒' },
            { id: 'P400048', name: 'DeLallo Kalamata Olives 9oz', brand: 'DeLallo', availability: 'in-stock', facings: 16, images: 2, emoji: '🫒' },
            { id: 'P400049', name: 'DeLallo Pitted Kalamata Olives 9oz', brand: 'DeLallo', availability: 'in-stock', facings: 14, images: 2, emoji: '🫒' },
            { id: 'P400050', name: 'Cento Kalamata Olives 7oz', brand: 'CENTO', availability: 'in-stock', facings: 18, images: 2, emoji: '🫒' },
            { id: 'P400051', name: 'Signature SELECT Kalamata Olives 8oz', brand: 'Signature SELECT', availability: 'in-stock', facings: 20, images: 2, emoji: '🫒' },
            { id: 'P400052', name: 'Jeff\'s Naturals Kalamata Olives 12oz', brand: 'Jeff\'s Naturals', availability: 'in-stock', facings: 12, images: 2, emoji: '🫒' },
            { id: 'P400053', name: 'Jeff\'s Naturals Castelvetrano Olives 7oz', brand: 'Jeff\'s Naturals', availability: 'in-stock', facings: 10, images: 2, emoji: '🫒' },
            { id: 'P400054', name: 'Mezzetta Kalamata Olives 9.5oz', brand: 'Mezzetta', availability: 'in-stock', facings: 14, images: 2, emoji: '🫒' },
            { id: 'P400055', name: 'Divina Kalamata Olives 6oz', brand: 'Divina', availability: 'in-stock', facings: 12, images: 2, emoji: '🫒' },

            // Artichoke Hearts
            { id: 'P400056', name: 'Cento Artichoke Hearts 14oz', brand: 'CENTO', availability: 'in-stock', facings: 38, images: 3, emoji: '🌿' },
            { id: 'P400057', name: 'Cento Artichoke Quarters 14oz', brand: 'CENTO', availability: 'in-stock', facings: 36, images: 3, emoji: '🌿' },
            { id: 'P400058', name: 'Cento Marinated Artichokes 12oz', brand: 'CENTO', availability: 'in-stock', facings: 32, images: 3, emoji: '🌿' },
            { id: 'P400059', name: 'Cento Grilled Artichokes 10oz', brand: 'CENTO', availability: 'in-stock', facings: 28, images: 2, emoji: '🌿' },
            { id: 'P400060', name: 'Signature SELECT Artichoke Hearts 14oz', brand: 'Signature SELECT', availability: 'in-stock', facings: 30, images: 2, emoji: '🌿' },
            { id: 'P400061', name: 'Signature SELECT Artichoke Quarters 14oz', brand: 'Signature SELECT', availability: 'in-stock', facings: 26, images: 2, emoji: '🌿' },
            { id: 'P400062', name: 'Signature SELECT Marinated Artichokes 12oz', brand: 'Signature SELECT', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🌿' },
            { id: 'P400063', name: 'DeLallo Artichoke Hearts 14oz', brand: 'DeLallo', availability: 'in-stock', facings: 22, images: 2, emoji: '🌿' },
            { id: 'P400064', name: 'DeLallo Marinated Artichokes 12oz', brand: 'DeLallo', availability: 'in-stock', facings: 18, images: 2, emoji: '🌿' },
            { id: 'P400065', name: 'Reese Artichoke Hearts 14oz', brand: 'Reese', availability: 'in-stock', facings: 16, images: 2, emoji: '🌿' },
            { id: 'P400066', name: 'Reese Artichoke Bottoms 14oz', brand: 'Reese', availability: 'in-stock', facings: 14, images: 2, emoji: '🌿' },
            { id: 'P400067', name: 'Cara Mia Marinated Artichokes 14oz', brand: 'Cara Mia', availability: 'in-stock', facings: 12, images: 2, emoji: '🌿' },

            // Roasted Red Peppers
            { id: 'P400068', name: 'Cento Roasted Red Peppers 12oz', brand: 'CENTO', availability: 'in-stock', facings: 34, images: 3, emoji: '🫑' },
            { id: 'P400069', name: 'Cento Fire Roasted Peppers 12oz', brand: 'CENTO', availability: 'in-stock', facings: 30, images: 2, emoji: '🫑' },
            { id: 'P400070', name: 'Cento Roasted Red Pepper Strips 12oz', brand: 'CENTO', availability: 'in-stock', facings: 26, images: 2, emoji: '🫑' },
            { id: 'P400071', name: 'Signature SELECT Roasted Red Peppers 12oz', brand: 'Signature SELECT', availability: 'in-stock', facings: 28, images: 2, emoji: '🫑' },
            { id: 'P400072', name: 'DeLallo Roasted Red Peppers 12oz', brand: 'DeLallo', availability: 'in-stock', facings: 24, images: 2, emoji: '🫑' },
            { id: 'P400073', name: 'DeLallo Fire Roasted Peppers 7.5oz', brand: 'DeLallo', availability: 'in-stock', facings: 20, images: 2, emoji: '🫑' },
            { id: 'P400074', name: 'Mezzetta Roasted Bell Peppers 16oz', brand: 'Mezzetta', availability: 'in-stock', facings: 18, images: 2, emoji: '🫑' },
            { id: 'P400075', name: 'Mancini Roasted Peppers 12oz', brand: 'Mancini', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🫑' },
            { id: 'P400076', name: 'Divina Roasted Red Peppers 10oz', brand: 'Divina', availability: 'in-stock', facings: 14, images: 2, emoji: '🫑' },
            { id: 'P400077', name: 'Jeff\'s Naturals Roasted Peppers 12oz', brand: 'Jeff\'s Naturals', availability: 'in-stock', facings: 12, images: 2, emoji: '🫑' },

            // Pepperoncini & Banana Peppers
            { id: 'P400078', name: 'Mezzetta Golden Pepperoncini 16oz', brand: 'Mezzetta', availability: 'in-stock', facings: 26, images: 3, emoji: '🌶️' },
            { id: 'P400079', name: 'Mezzetta Deli-Sliced Hot Peppers 16oz', brand: 'Mezzetta', availability: 'in-stock', facings: 22, images: 2, emoji: '🌶️' },
            { id: 'P400080', name: 'Signature SELECT Pepperoncini 16oz', brand: 'Signature SELECT', availability: 'in-stock', facings: 24, images: 2, emoji: '🌶️' },
            { id: 'P400081', name: 'Signature SELECT Banana Peppers 16oz', brand: 'Signature SELECT', availability: 'in-stock', facings: 20, images: 2, emoji: '🌶️' },
            { id: 'P400082', name: 'Vlasic Pepperoncini 12oz', brand: 'Vlasic', availability: 'in-stock', facings: 18, images: 2, emoji: '🌶️' },
            { id: 'P400083', name: 'Vlasic Banana Peppers 12oz', brand: 'Vlasic', availability: 'in-stock', facings: 16, images: 2, emoji: '🌶️' },
            { id: 'P400084', name: 'Cento Hot Peppers 12oz', brand: 'CENTO', availability: 'in-stock', facings: 20, images: 2, emoji: '🌶️' },
            { id: 'P400085', name: 'Cento Pepperoncini 16oz', brand: 'CENTO', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🌶️' },
            { id: 'P400086', name: 'Mt. Olive Pepperoncini 16oz', brand: 'Mt. Olive', availability: 'in-stock', facings: 18, images: 2, emoji: '🌶️' },
            { id: 'P400087', name: 'B&G Pepperoncini 16oz', brand: 'B&G', availability: 'in-stock', facings: 14, images: 2, emoji: '🌶️' },

            // Jalapeños
            { id: 'P400088', name: 'La Costeña Jalapeño Slices 12oz', brand: 'La Costeña', availability: 'in-stock', facings: 24, images: 2, emoji: '🌶️' },
            { id: 'P400089', name: 'La Costeña Whole Jalapeños 12oz', brand: 'La Costeña', availability: 'in-stock', facings: 20, images: 2, emoji: '🌶️' },
            { id: 'P400090', name: 'Signature SELECT Sliced Jalapeños 12oz', brand: 'Signature SELECT', availability: 'in-stock', facings: 22, images: 2, emoji: '🌶️' },
            { id: 'P400091', name: 'Mezzetta Sliced Jalapeños 16oz', brand: 'Mezzetta', availability: 'in-stock', facings: 18, images: 2, emoji: '🌶️' },
            { id: 'P400092', name: 'Goya Jalapeño Peppers 12oz', brand: 'Goya', availability: 'in-stock', facings: 16, images: 2, emoji: '🌶️' },
            { id: 'P400093', name: 'Ortega Diced Jalapeños 4oz', brand: 'Ortega', availability: 'in-stock', facings: 20, images: 2, emoji: '🌶️' },

            // Capers
            { id: 'P400094', name: 'Cento Capers Non-Pareil 3.5oz', brand: 'CENTO', availability: 'in-stock', facings: 20, images: 2, emoji: '🌱' },
            { id: 'P400095', name: 'Cento Capers Capote 3.5oz', brand: 'CENTO', availability: 'in-stock', facings: 16, images: 2, emoji: '🌱' },
            { id: 'P400096', name: 'Signature SELECT Capers 3.5oz', brand: 'Signature SELECT', availability: 'in-stock', facings: 18, images: 2, emoji: '🌱' },
            { id: 'P400097', name: 'DeLallo Capers Non-Pareil 3.5oz', brand: 'DeLallo', availability: 'in-stock', facings: 14, images: 2, emoji: '🌱' },
            { id: 'P400098', name: 'Mezzetta Imported Capers 4oz', brand: 'Mezzetta', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🌱' },
            { id: 'P400099', name: 'Divina Capers 3.5oz', brand: 'Divina', availability: 'in-stock', facings: 12, images: 2, emoji: '🌱' },
            { id: 'P400100', name: 'Reese Capers Non-Pareil 3.5oz', brand: 'Reese', availability: 'in-stock', facings: 10, images: 2, emoji: '🌱' },

            // Sun-Dried Tomatoes
            { id: 'P400101', name: 'Cento Sun-Dried Tomatoes in Oil 8oz', brand: 'CENTO', availability: 'in-stock', facings: 22, images: 2, emoji: '🍅' },
            { id: 'P400102', name: 'Cento Julienne Sun-Dried Tomatoes 8oz', brand: 'CENTO', availability: 'in-stock', facings: 18, images: 2, emoji: '🍅' },
            { id: 'P400103', name: 'Signature SELECT Sun-Dried Tomatoes 8oz', brand: 'Signature SELECT', availability: 'in-stock', facings: 16, images: 2, emoji: '🍅' },
            { id: 'P400104', name: 'DeLallo Sun-Dried Tomatoes 7oz', brand: 'DeLallo', availability: 'in-stock', facings: 14, images: 2, emoji: '🍅' },
            { id: 'P400105', name: 'Mezzetta Sun-Dried Tomatoes 8oz', brand: 'Mezzetta', availability: 'in-stock', facings: 12, images: 2, emoji: '🍅' },
            { id: 'P400106', name: 'Bella Sun Luci Sun-Dried Tomatoes 3oz', brand: 'Bella Sun Luci', availability: 'in-stock', facings: 16, images: 2, emoji: '🍅' },
            { id: 'P400107', name: 'Bella Sun Luci Julienne Tomatoes 3oz', brand: 'Bella Sun Luci', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🍅' },

            // Cocktail Onions & Pearl Onions
            { id: 'P400108', name: 'Sable & Rosenfeld Cocktail Onions 10oz', brand: 'Sable & Rosenfeld', availability: 'in-stock', facings: 12, images: 2, emoji: '🧅' },
            { id: 'P400109', name: 'Signature SELECT Cocktail Onions 8oz', brand: 'Signature SELECT', availability: 'in-stock', facings: 14, images: 2, emoji: '🧅' },
            { id: 'P400110', name: 'Mezzetta Cocktail Onions 10oz', brand: 'Mezzetta', availability: 'in-stock', facings: 10, images: 2, emoji: '🧅' },
            { id: 'P400111', name: 'Cento Pearl Onions 15oz', brand: 'CENTO', availability: 'in-stock', facings: 12, images: 2, emoji: '🧅' },

            // Marinated Vegetables
            { id: 'P400112', name: 'Cento Marinated Mushrooms 12oz', brand: 'CENTO', availability: 'in-stock', facings: 18, images: 2, emoji: '🍄' },
            { id: 'P400113', name: 'Signature SELECT Marinated Mushrooms 12oz', brand: 'Signature SELECT', availability: 'in-stock', facings: 16, images: 2, emoji: '🍄' },
            { id: 'P400114', name: 'DeLallo Marinated Mushrooms 10oz', brand: 'DeLallo', availability: 'in-stock', facings: 12, images: 2, emoji: '🍄' },
            { id: 'P400115', name: 'Cento Eggplant Caponata 11.5oz', brand: 'CENTO', availability: 'in-stock', facings: 14, images: 2, emoji: '🍆' },
            { id: 'P400116', name: 'Cento Grilled Eggplant 10oz', brand: 'CENTO', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🍆' },
            { id: 'P400117', name: 'DeLallo Eggplant Caponata 7.05oz', brand: 'DeLallo', availability: 'in-stock', facings: 10, images: 2, emoji: '🍆' },

            // Antipasto & Mixed Vegetables
            { id: 'P400118', name: 'Mezzetta Italian Antipasto 16oz', brand: 'Mezzetta', availability: 'in-stock', facings: 14, images: 2, emoji: '🥗' },
            { id: 'P400119', name: 'Signature SELECT Giardiniera 16oz', brand: 'Signature SELECT', availability: 'in-stock', facings: 16, images: 2, emoji: '🥗' },
            { id: 'P400120', name: 'Cento Hot Giardiniera 16oz', brand: 'CENTO', availability: 'in-stock', facings: 18, images: 2, emoji: '🥗' },
            { id: 'P400121', name: 'Cento Mild Giardiniera 16oz', brand: 'CENTO', availability: 'in-stock', facings: 16, images: 2, emoji: '🥗' },
            { id: 'P400122', name: 'Vienna Beef Hot Giardiniera 16oz', brand: 'Vienna Beef', availability: 'in-stock', facings: 12, images: 2, emoji: '🥗' },
            { id: 'P400123', name: 'DeLallo Giardiniera 16oz', brand: 'DeLallo', availability: 'in-stock', facings: 10, images: 2, emoji: '🥗' },

            // Pimentos
            { id: 'P400124', name: 'Dromedary Diced Pimentos 4oz', brand: 'Dromedary', availability: 'in-stock', facings: 20, images: 2, emoji: '🫑' },
            { id: 'P400125', name: 'Signature SELECT Diced Pimentos 4oz', brand: 'Signature SELECT', availability: 'in-stock', facings: 18, images: 2, emoji: '🫑' },
            { id: 'P400126', name: 'Cento Diced Pimentos 4oz', brand: 'CENTO', availability: 'in-stock', facings: 16, images: 2, emoji: '🫑' },

            // Sauerkraut
            { id: 'P400127', name: 'Vlasic Sauerkraut 32oz', brand: 'Vlasic', availability: 'in-stock', facings: 20, images: 2, emoji: '🥬' },
            { id: 'P400128', name: 'Signature SELECT Sauerkraut 32oz', brand: 'Signature SELECT', availability: 'in-stock', facings: 18, images: 2, emoji: '🥬' },
            { id: 'P400129', name: 'Claussen Sauerkraut 32oz', brand: 'Claussen', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🥬' },
            { id: 'P400130', name: 'Frank\'s Kraut 14oz', brand: 'Frank\'s', availability: 'in-stock', facings: 14, images: 2, emoji: '🥬' },

            // Horseradish
            { id: 'P400131', name: 'Gold\'s Prepared Horseradish 8oz', brand: 'Gold\'s', availability: 'in-stock', facings: 16, images: 2, emoji: '🌱' },
            { id: 'P400132', name: 'Signature SELECT Horseradish 8oz', brand: 'Signature SELECT', availability: 'in-stock', facings: 14, images: 2, emoji: '🌱' },
            { id: 'P400133', name: 'Silver Spring Horseradish 9.5oz', brand: 'Silver Spring', availability: 'in-stock', facings: 12, images: 2, emoji: '🌱' },

            // Olive Salad & Tapenade
            { id: 'P400134', name: 'Boscoli Italian Olive Salad 16oz', brand: 'Boscoli', availability: 'in-stock', facings: 14, images: 2, emoji: '🫒' },
            { id: 'P400135', name: 'Mezzetta Olive Bruschetta 9.5oz', brand: 'Mezzetta', availability: 'in-stock', facings: 12, images: 2, emoji: '🫒' },
            { id: 'P400136', name: 'DeLallo Black Olive Tapenade 6.35oz', brand: 'DeLallo', availability: 'in-stock', facings: 10, images: 2, emoji: '🫒' },
            { id: 'P400137', name: 'DeLallo Green Olive Tapenade 6.35oz', brand: 'DeLallo', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🫒' },
            { id: 'P400138', name: 'Divina Olive Tapenade 9oz', brand: 'Divina', availability: 'in-stock', facings: 8, images: 2, emoji: '🫒' },

            // Cherry Peppers & Other Peppers
            { id: 'P400139', name: 'Cento Sweet Cherry Peppers 12oz', brand: 'CENTO', availability: 'in-stock', facings: 16, images: 2, emoji: '🫑' },
            { id: 'P400140', name: 'Cento Hot Cherry Peppers 12oz', brand: 'CENTO', availability: 'in-stock', facings: 14, images: 2, emoji: '🫑' },
            { id: 'P400141', name: 'Mezzetta Hot Cherry Peppers 16oz', brand: 'Mezzetta', availability: 'in-stock', facings: 12, images: 2, emoji: '🫑' },
            { id: 'P400142', name: 'B&G Hot Cherry Peppers 12oz', brand: 'B&G', availability: 'in-stock', facings: 10, images: 2, emoji: '🫑' },
            { id: 'P400143', name: 'Jeff\'s Naturals Sliced Cherry Peppers 12oz', brand: 'Jeff\'s Naturals', availability: 'in-stock', facings: 8, images: 2, emoji: '🫑' },

            // Pickled Beets
            { id: 'P400144', name: 'Signature SELECT Pickled Beets 16oz', brand: 'Signature SELECT', availability: 'in-stock', facings: 14, images: 2, emoji: '🥬' },
            { id: 'P400145', name: 'Aunt Nellie\'s Pickled Beets 16oz', brand: 'Aunt Nellie\'s', availability: 'in-stock', facings: 12, images: 2, emoji: '🥬' },
            { id: 'P400146', name: 'Del Monte Pickled Beets 16oz', brand: 'Del Monte', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🥬' },

            // Water Chestnuts
            { id: 'P400147', name: 'Dynasty Sliced Water Chestnuts 8oz', brand: 'Dynasty', availability: 'in-stock', facings: 16, images: 2, emoji: '🥜' },
            { id: 'P400148', name: 'Dynasty Whole Water Chestnuts 8oz', brand: 'Dynasty', availability: 'in-stock', facings: 14, images: 2, emoji: '🥜' },
            { id: 'P400149', name: 'La Choy Water Chestnuts 8oz', brand: 'La Choy', availability: 'in-stock', facings: 12, images: 2, emoji: '🥜' },

            // Bamboo Shoots
            { id: 'P400150', name: 'Dynasty Bamboo Shoots Sliced 8oz', brand: 'Dynasty', availability: 'in-stock', facings: 14, images: 2, emoji: '🎋' },
            { id: 'P400151', name: 'Dynasty Bamboo Shoots Whole 8oz', brand: 'Dynasty', availability: 'in-stock', facings: 12, images: 2, emoji: '🎋' },
            { id: 'P400152', name: 'La Choy Bamboo Shoots 8oz', brand: 'La Choy', availability: 'in-stock', facings: 10, images: 2, emoji: '🎋' },

            // Hearts of Palm
            { id: 'P400153', name: 'Goya Hearts of Palm 14oz', brand: 'Goya', availability: 'in-stock', facings: 16, images: 2, emoji: '🌴' },
            { id: 'P400154', name: 'Native Forest Hearts of Palm 14oz', brand: 'Native Forest', availability: 'in-stock', facings: 14, images: 2, emoji: '🌴' },
            { id: 'P400155', name: 'Signature SELECT Hearts of Palm 14oz', brand: 'Signature SELECT', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🌴' },

            // Canned Asparagus
            { id: 'P400156', name: 'Del Monte Asparagus Spears 15oz', brand: 'Del Monte', availability: 'in-stock', facings: 12, images: 2, emoji: '🌿' },
            { id: 'P400157', name: 'Signature SELECT Asparagus Cuts 15oz', brand: 'Signature SELECT', availability: 'in-stock', facings: 10, images: 2, emoji: '🌿' },

            // Canned Peas
            { id: 'P400158', name: 'Le Sueur Sweet Peas 15oz', brand: 'Le Sueur', availability: 'in-stock', facings: 24, images: 2, emoji: '🫛' },
            { id: 'P400159', name: 'Green Giant Sweet Peas 15oz', brand: 'Green Giant', availability: 'in-stock', facings: 22, images: 2, emoji: '🫛' },
            { id: 'P400160', name: 'Signature SELECT Sweet Peas 15oz', brand: 'Signature SELECT', availability: 'in-stock', facings: 20, images: 2, emoji: '🫛' },
            { id: 'P400161', name: 'Del Monte Sweet Peas 15oz', brand: 'Del Monte', availability: 'in-stock', facings: 18, images: 2, emoji: '🫛' },

            // Canned Corn
            { id: 'P400162', name: 'Green Giant Whole Kernel Corn 15oz', brand: 'Green Giant', availability: 'in-stock', facings: 26, images: 2, emoji: '🌽' },
            { id: 'P400163', name: 'Green Giant Cream Style Corn 15oz', brand: 'Green Giant', availability: 'in-stock', facings: 22, images: 2, emoji: '🌽' },
            { id: 'P400164', name: 'Del Monte Whole Kernel Corn 15oz', brand: 'Del Monte', availability: 'in-stock', facings: 24, images: 2, emoji: '🌽' },
            { id: 'P400165', name: 'Del Monte Cream Style Corn 15oz', brand: 'Del Monte', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🌽' },
            { id: 'P400166', name: 'Signature SELECT Whole Kernel Corn 15oz', brand: 'Signature SELECT', availability: 'in-stock', facings: 20, images: 2, emoji: '🌽' },

            // Canned Green Beans
            { id: 'P400167', name: 'Del Monte Cut Green Beans 14.5oz', brand: 'Del Monte', availability: 'in-stock', facings: 24, images: 2, emoji: '🫘' },
            { id: 'P400168', name: 'Del Monte French Style Green Beans 14.5oz', brand: 'Del Monte', availability: 'in-stock', facings: 20, images: 2, emoji: '🫘' },
            { id: 'P400169', name: 'Green Giant Cut Green Beans 14.5oz', brand: 'Green Giant', availability: 'in-stock', facings: 22, images: 2, emoji: '🫘' },
            { id: 'P400170', name: 'Signature SELECT Cut Green Beans 14.5oz', brand: 'Signature SELECT', availability: 'in-stock', facings: 18, images: 2, emoji: '🫘' },

            // Canned Carrots
            { id: 'P400171', name: 'Del Monte Sliced Carrots 14.5oz', brand: 'Del Monte', availability: 'in-stock', facings: 16, images: 2, emoji: '🥕' },
            { id: 'P400172', name: 'Signature SELECT Sliced Carrots 14.5oz', brand: 'Signature SELECT', availability: 'in-stock', facings: 14, images: 2, emoji: '🥕' },

            // Canned Mixed Vegetables
            { id: 'P400173', name: 'Del Monte Mixed Vegetables 15oz', brand: 'Del Monte', availability: 'in-stock', facings: 20, images: 2, emoji: '🥗' },
            { id: 'P400174', name: 'Green Giant Mixed Vegetables 15oz', brand: 'Green Giant', availability: 'in-stock', facings: 18, images: 2, emoji: '🥗' },
            { id: 'P400175', name: 'Signature SELECT Mixed Vegetables 15oz', brand: 'Signature SELECT', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🥗' },

            // Canned Beets
            { id: 'P400176', name: 'Del Monte Sliced Beets 14.5oz', brand: 'Del Monte', availability: 'in-stock', facings: 16, images: 2, emoji: '🥬' },
            { id: 'P400177', name: 'Del Monte Diced Beets 14.5oz', brand: 'Del Monte', availability: 'in-stock', facings: 14, images: 2, emoji: '🥬' },
            { id: 'P400178', name: 'Signature SELECT Sliced Beets 14.5oz', brand: 'Signature SELECT', availability: 'in-stock', facings: 12, images: 2, emoji: '🥬' },

            // Specialty Items
            { id: 'P400179', name: 'Mezzetta Garlic Cloves 8oz', brand: 'Mezzetta', availability: 'in-stock', facings: 12, images: 2, emoji: '🧄' },
            { id: 'P400180', name: 'Cento Garlic in Oil 8oz', brand: 'CENTO', availability: 'in-stock', facings: 10, images: 2, emoji: '🧄' },
            { id: 'P400181', name: 'Jeff\'s Naturals Garlic Stuffed Olives 7oz', brand: 'Jeff\'s Naturals', availability: 'in-stock', facings: 8, images: 2, emoji: '🫒' },
            { id: 'P400182', name: 'Peperoncino Calabrese Hot Peppers 10oz', brand: 'Tutto Calabria', availability: 'in-stock', facings: 10, images: 2, emoji: '🌶️' },
            { id: 'P400183', name: 'Mezzetta Italian Mix Giardiniera 16oz', brand: 'Mezzetta', availability: 'in-stock', facings: 12, images: 2, emoji: '🥗' },
            { id: 'P400184', name: 'Tillen Farms Pickled Asparagus 12oz', brand: 'Tillen Farms', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🌿' },
            { id: 'P400185', name: 'Tillen Farms Crispy Dilly Beans 12oz', brand: 'Tillen Farms', availability: 'in-stock', facings: 8, images: 2, emoji: '🫘' },
            { id: 'P400186', name: 'Rick\'s Picks Mean Beans 15oz', brand: 'Rick\'s Picks', availability: 'in-stock', facings: 6, images: 2, emoji: '🫘' },
            { id: 'P400187', name: 'Wickles Wicked Okra 16oz', brand: 'Wickles', availability: 'in-stock', facings: 8, images: 2, emoji: '🌿' }
        ]
    },
    4: {
        id: 4,
        datetime: new Date(Date.now() - 18 * 60 * 60 * 1000),
        category: 'Dairy',
        products: [
            // Milk - Whole
            { id: 'P500001', name: 'Horizon Organic Whole Milk Gallon', brand: 'Horizon', availability: 'in-stock', facings: 28, images: 3, emoji: '🥛' },
            { id: 'P500002', name: 'Horizon Organic Whole Milk Half Gallon', brand: 'Horizon', availability: 'in-stock', facings: 24, images: 2, emoji: '🥛' },
            { id: 'P500003', name: 'Organic Valley Whole Milk Gallon', brand: 'Organic Valley', availability: 'in-stock', facings: 26, images: 2, emoji: '🥛' },
            { id: 'P500004', name: 'Signature SELECT Whole Milk Gallon', brand: 'Signature SELECT', availability: 'in-stock', facings: 32, images: 2, emoji: '🥛' },
            { id: 'P500005', name: 'Clover Organic Whole Milk Half Gallon', brand: 'Clover', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🥛' },

            // Milk - 2%
            { id: 'P500006', name: 'Horizon Organic 2% Milk Gallon', brand: 'Horizon', availability: 'in-stock', facings: 30, images: 3, emoji: '🥛' },
            { id: 'P500007', name: 'Horizon Organic 2% Milk Half Gallon', brand: 'Horizon', availability: 'in-stock', facings: 26, images: 2, emoji: '🥛' },
            { id: 'P500008', name: 'Organic Valley 2% Milk Gallon', brand: 'Organic Valley', availability: 'in-stock', facings: 28, images: 2, emoji: '🥛' },
            { id: 'P500009', name: 'Signature SELECT 2% Milk Gallon', brand: 'Signature SELECT', availability: 'in-stock', facings: 34, images: 3, emoji: '🥛' },
            { id: 'P500010', name: 'Darigold 2% Milk Gallon', brand: 'Darigold', availability: 'in-stock', facings: 24, images: 2, emoji: '🥛' },

            // Milk - Skim/Fat Free
            { id: 'P500011', name: 'Horizon Organic Skim Milk Gallon', brand: 'Horizon', availability: 'in-stock', facings: 22, images: 2, emoji: '🥛' },
            { id: 'P500012', name: 'Organic Valley Skim Milk Gallon', brand: 'Organic Valley', availability: 'in-stock', facings: 20, images: 2, emoji: '🥛' },
            { id: 'P500013', name: 'Signature SELECT Skim Milk Gallon', brand: 'Signature SELECT', availability: 'in-stock', facings: 26, images: 2, emoji: '🥛' },

            // Milk - 1%
            { id: 'P500014', name: 'Signature SELECT 1% Milk Gallon', brand: 'Signature SELECT', availability: 'in-stock', facings: 24, images: 2, emoji: '🥛' },
            { id: 'P500015', name: 'Horizon Organic 1% Milk Half Gallon', brand: 'Horizon', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🥛' },

            // Milk - Lactose Free
            { id: 'P500016', name: 'Lactaid Whole Milk Half Gallon', brand: 'Lactaid', availability: 'in-stock', facings: 20, images: 2, emoji: '🥛' },
            { id: 'P500017', name: 'Lactaid 2% Milk Half Gallon', brand: 'Lactaid', availability: 'in-stock', facings: 22, images: 2, emoji: '🥛' },
            { id: 'P500018', name: 'Lactaid Fat Free Milk Half Gallon', brand: 'Lactaid', availability: 'in-stock', facings: 18, images: 2, emoji: '🥛' },
            { id: 'P500019', name: 'Fairlife Lactose Free 2% Milk 52oz', brand: 'Fairlife', availability: 'in-stock', facings: 24, images: 3, emoji: '🥛' },
            { id: 'P500020', name: 'Fairlife Lactose Free Whole Milk 52oz', brand: 'Fairlife', availability: 'in-stock', facings: 20, images: 2, emoji: '🥛' },

            // Milk - Chocolate
            { id: 'P500021', name: 'Horizon Organic Chocolate Milk 8oz 12pk', brand: 'Horizon', availability: 'in-stock', facings: 28, images: 3, emoji: '🥛' },
            { id: 'P500022', name: 'TruMoo Chocolate Milk Gallon', brand: 'TruMoo', availability: 'in-stock', facings: 26, images: 2, emoji: '🥛' },
            { id: 'P500023', name: 'TruMoo Chocolate Milk Half Gallon', brand: 'TruMoo', availability: 'in-stock', facings: 22, images: 2, emoji: '🥛' },
            { id: 'P500024', name: 'Nesquik Chocolate Milk 14oz', brand: 'Nesquik', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🥛' },
            { id: 'P500025', name: 'Fairlife Chocolate Milk 52oz', brand: 'Fairlife', availability: 'in-stock', facings: 24, images: 2, emoji: '🥛' },

            // Yogurt - Greek (Chobani)
            { id: 'P500026', name: 'Chobani Greek Yogurt Vanilla 32oz', brand: 'Chobani', availability: 'in-stock', facings: 32, images: 3, emoji: '🥄' },
            { id: 'P500027', name: 'Chobani Greek Yogurt Plain 32oz', brand: 'Chobani', availability: 'in-stock', facings: 30, images: 3, emoji: '🥄' },
            { id: 'P500028', name: 'Chobani Greek Yogurt Strawberry 5.3oz', brand: 'Chobani', availability: 'in-stock', facings: 40, images: 3, emoji: '🥄' },
            { id: 'P500029', name: 'Chobani Greek Yogurt Blueberry 5.3oz', brand: 'Chobani', availability: 'in-stock', facings: 36, images: 3, emoji: '🥄' },
            { id: 'P500030', name: 'Chobani Greek Yogurt Peach 5.3oz', brand: 'Chobani', availability: 'in-stock', facings: 32, images: 2, emoji: '🥄' },
            { id: 'P500031', name: 'Chobani Greek Yogurt Mixed Berry 5.3oz', brand: 'Chobani', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🥄' },
            { id: 'P500032', name: 'Chobani Zero Sugar Vanilla 5.3oz', brand: 'Chobani', availability: 'in-stock', facings: 28, images: 2, emoji: '🥄' },
            { id: 'P500033', name: 'Chobani Flip Key Lime Crumble 5.3oz', brand: 'Chobani', availability: 'in-stock', facings: 24, images: 2, emoji: '🥄' },

            // Yogurt - Greek (Fage)
            { id: 'P500034', name: 'Fage Total 0% Plain 17.6oz', brand: 'Fage', availability: 'in-stock', facings: 26, images: 2, emoji: '🥄' },
            { id: 'P500035', name: 'Fage Total 2% Plain 17.6oz', brand: 'Fage', availability: 'in-stock', facings: 24, images: 2, emoji: '🥄' },
            { id: 'P500036', name: 'Fage Total 5% Plain 17.6oz', brand: 'Fage', availability: 'in-stock', facings: 20, images: 2, emoji: '🥄' },
            { id: 'P500037', name: 'Fage Total Split Cup Honey 5.3oz', brand: 'Fage', availability: 'in-stock', facings: 22, images: 2, emoji: '🥄' },

            // Yogurt - Icelandic (Siggi's)
            { id: 'P500038', name: 'Siggi\'s Icelandic Vanilla 5.3oz', brand: 'Siggi\'s', availability: 'in-stock', facings: 24, images: 2, emoji: '🥄' },
            { id: 'P500039', name: 'Siggi\'s Icelandic Strawberry 5.3oz', brand: 'Siggi\'s', availability: 'in-stock', facings: 20, images: 2, emoji: '🥄' },
            { id: 'P500040', name: 'Siggi\'s Icelandic Plain 24oz', brand: 'Siggi\'s', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🥄' },
            { id: 'P500041', name: 'Siggi\'s Icelandic Blueberry 5.3oz', brand: 'Siggi\'s', availability: 'in-stock', facings: 18, images: 2, emoji: '🥄' },

            // Yogurt - Regular (Yoplait)
            { id: 'P500042', name: 'Yoplait Original Strawberry 6oz', brand: 'Yoplait', availability: 'in-stock', facings: 36, images: 3, emoji: '🥄' },
            { id: 'P500043', name: 'Yoplait Original Mixed Berry 6oz', brand: 'Yoplait', availability: 'in-stock', facings: 32, images: 2, emoji: '🥄' },
            { id: 'P500044', name: 'Yoplait Original Peach 6oz', brand: 'Yoplait', availability: 'in-stock', facings: 28, images: 2, emoji: '🥄' },
            { id: 'P500045', name: 'Yoplait Light Strawberry 6oz', brand: 'Yoplait', availability: 'in-stock', facings: 24, images: 2, emoji: '🥄' },
            { id: 'P500046', name: 'Yoplait Whips Chocolate Mousse 4oz', brand: 'Yoplait', availability: 'in-stock', facings: 20, images: 2, emoji: '🥄' },

            // Yogurt - Drinkable
            { id: 'P500047', name: 'Dannon Danimals Strawberry 6pk', brand: 'Dannon', availability: 'in-stock', facings: 28, images: 2, emoji: '🥤' },
            { id: 'P500048', name: 'Chobani Drink Strawberry Banana 7oz', brand: 'Chobani', availability: 'in-stock', facings: 24, images: 2, emoji: '🥤' },
            { id: 'P500049', name: 'Activia Probiotic Dailies Strawberry 8pk', brand: 'Activia', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🥤' },

            // Cheese - Cheddar Blocks
            { id: 'P500050', name: 'Tillamook Sharp Cheddar 8oz', brand: 'Tillamook', availability: 'in-stock', facings: 32, images: 3, emoji: '🧀' },
            { id: 'P500051', name: 'Tillamook Medium Cheddar 8oz', brand: 'Tillamook', availability: 'in-stock', facings: 30, images: 3, emoji: '🧀' },
            { id: 'P500052', name: 'Tillamook Extra Sharp Cheddar 8oz', brand: 'Tillamook', availability: 'in-stock', facings: 26, images: 2, emoji: '🧀' },
            { id: 'P500053', name: 'Tillamook Mild Cheddar 8oz', brand: 'Tillamook', availability: 'in-stock', facings: 24, images: 2, emoji: '🧀' },
            { id: 'P500054', name: 'Cabot Sharp Cheddar 8oz', brand: 'Cabot', availability: 'in-stock', facings: 28, images: 2, emoji: '🧀' },
            { id: 'P500055', name: 'Cabot Seriously Sharp Cheddar 8oz', brand: 'Cabot', availability: 'in-stock', facings: 24, images: 2, emoji: '🧀' },
            { id: 'P500056', name: 'Signature SELECT Sharp Cheddar 8oz', brand: 'Signature SELECT', availability: 'in-stock', facings: 26, images: 2, emoji: '🧀' },

            // Cheese - Cheddar Shredded
            { id: 'P500057', name: 'Tillamook Sharp Cheddar Shredded 8oz', brand: 'Tillamook', availability: 'in-stock', facings: 34, images: 3, emoji: '🧀' },
            { id: 'P500058', name: 'Tillamook Medium Cheddar Shredded 8oz', brand: 'Tillamook', availability: 'in-stock', facings: 30, images: 2, emoji: '🧀' },
            { id: 'P500059', name: 'Kraft Sharp Cheddar Shredded 8oz', brand: 'Kraft', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🧀' },
            { id: 'P500060', name: 'Sargento Sharp Cheddar Shredded 8oz', brand: 'Sargento', availability: 'in-stock', facings: 28, images: 2, emoji: '🧀' },

            // Cheese - Mozzarella
            { id: 'P500061', name: 'Galbani Whole Milk Mozzarella 16oz', brand: 'Galbani', availability: 'in-stock', facings: 26, images: 2, emoji: '🧀' },
            { id: 'P500062', name: 'Belgioioso Fresh Mozzarella 8oz', brand: 'BelGioioso', availability: 'in-stock', facings: 24, images: 2, emoji: '🧀' },
            { id: 'P500063', name: 'Kraft Shredded Mozzarella 8oz', brand: 'Kraft', availability: 'in-stock', facings: 32, images: 3, emoji: '🧀' },
            { id: 'P500064', name: 'Sargento Shredded Mozzarella 8oz', brand: 'Sargento', availability: 'in-stock', facings: 28, images: 2, emoji: '🧀' },
            { id: 'P500065', name: 'Polly-O String Cheese 12oz', brand: 'Polly-O', availability: 'in-stock', facings: 30, images: 3, emoji: '🧀' },

            // Cheese - Mexican Blend
            { id: 'P500066', name: 'Sargento 4 Cheese Mexican Shredded 8oz', brand: 'Sargento', availability: 'in-stock', facings: 32, images: 3, emoji: '🧀' },
            { id: 'P500067', name: 'Kraft Mexican Style Shredded 8oz', brand: 'Kraft', availability: 'in-stock', facings: 28, images: 2, emoji: '🧀' },
            { id: 'P500068', name: 'Signature SELECT Mexican Blend 8oz', brand: 'Signature SELECT', availability: 'in-stock', facings: 26, images: 2, emoji: '🧀' },

            // Cheese - Pepper Jack
            { id: 'P500069', name: 'Tillamook Pepper Jack Sliced 8oz', brand: 'Tillamook', availability: 'in-stock', facings: 24, images: 2, emoji: '🧀' },
            { id: 'P500070', name: 'Cabot Pepper Jack Block 8oz', brand: 'Cabot', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🧀' },
            { id: 'P500071', name: 'Kraft Pepper Jack Shredded 8oz', brand: 'Kraft', availability: 'in-stock', facings: 20, images: 2, emoji: '🧀' },

            // Cheese - Swiss
            { id: 'P500072', name: 'Emmi Swiss Cheese Sliced 6oz', brand: 'Emmi', availability: 'in-stock', facings: 20, images: 2, emoji: '🧀' },
            { id: 'P500073', name: 'Boar\'s Head Swiss Cheese 8oz', brand: 'Boar\'s Head', availability: 'in-stock', facings: 18, images: 2, emoji: '🧀' },
            { id: 'P500074', name: 'Jarlsberg Swiss Cheese 8oz', brand: 'Jarlsberg', availability: 'in-stock', facings: 16, images: 2, emoji: '🧀' },

            // Cheese - American/Singles
            { id: 'P500075', name: 'Kraft Singles American 16 Slices', brand: 'Kraft', availability: 'in-stock', facings: 32, images: 3, emoji: '🧀' },
            { id: 'P500076', name: 'Kraft Singles White American 16 Slices', brand: 'Kraft', availability: 'in-stock', facings: 28, images: 2, emoji: '🧀' },
            { id: 'P500077', name: 'Kraft Singles 2% Milk American 16 Slices', brand: 'Kraft', availability: 'in-stock', facings: 24, images: 2, emoji: '🧀' },
            { id: 'P500078', name: 'Land O Lakes American Singles 12oz', brand: 'Land O Lakes', availability: 'in-stock', facings: 20, images: 2, emoji: '🧀' },

            // Cheese - Parmesan
            { id: 'P500079', name: 'Kraft Grated Parmesan 8oz', brand: 'Kraft', availability: 'in-stock', facings: 30, images: 3, emoji: '🧀' },
            { id: 'P500080', name: 'BelGioioso Shaved Parmesan 5oz', brand: 'BelGioioso', availability: 'in-stock', facings: 24, images: 2, emoji: '🧀' },
            { id: 'P500081', name: 'Sargento Shredded Parmesan 5oz', brand: 'Sargento', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🧀' },

            // Cheese - Specialty
            { id: 'P500082', name: 'Boursin Garlic & Fine Herbs 5.2oz', brand: 'Boursin', availability: 'in-stock', facings: 18, images: 2, emoji: '🧀' },
            { id: 'P500083', name: 'Laughing Cow Creamy Swiss Wedges', brand: 'Laughing Cow', availability: 'in-stock', facings: 20, images: 2, emoji: '🧀' },
            { id: 'P500084', name: 'Babybel Original Mini Cheese 8oz', brand: 'Babybel', availability: 'in-stock', facings: 24, images: 2, emoji: '🧀' },
            { id: 'P500085', name: 'Babybel Light Mini Cheese 8oz', brand: 'Babybel', availability: 'in-stock', facings: 20, images: 2, emoji: '🧀' },
            { id: 'P500086', name: 'Kerrygold Dubliner Cheese 7oz', brand: 'Kerrygold', availability: 'in-stock', facings: 16, images: 2, emoji: '🧀' },
            { id: 'P500087', name: 'Brie Wheel 8oz', brand: 'President', availability: 'in-stock', facings: 14, images: 2, emoji: '🧀' },
            { id: 'P500088', name: 'Goat Cheese Log Plain 4oz', brand: 'Laura Chenel', availability: 'in-stock', facings: 18, images: 2, emoji: '🧀' },

            // Butter - Salted
            { id: 'P500089', name: 'Land O Lakes Butter Salted 1lb', brand: 'Land O Lakes', availability: 'in-stock', facings: 32, images: 3, emoji: '🧈' },
            { id: 'P500090', name: 'Challenge Butter Salted 1lb', brand: 'Challenge', availability: 'in-stock', facings: 28, images: 3, emoji: '🧈' },
            { id: 'P500091', name: 'Kerrygold Irish Butter Salted 8oz', brand: 'Kerrygold', availability: 'in-stock', facings: 26, images: 3, emoji: '🧈' },
            { id: 'P500092', name: 'Tillamook Butter Salted 1lb', brand: 'Tillamook', availability: 'in-stock', facings: 24, images: 2, emoji: '🧈' },
            { id: 'P500093', name: 'Signature SELECT Butter Salted 1lb', brand: 'Signature SELECT', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🧈' },

            // Butter - Unsalted
            { id: 'P500094', name: 'Land O Lakes Butter Unsalted 1lb', brand: 'Land O Lakes', availability: 'in-stock', facings: 28, images: 2, emoji: '🧈' },
            { id: 'P500095', name: 'Challenge Butter Unsalted 1lb', brand: 'Challenge', availability: 'in-stock', facings: 24, images: 2, emoji: '🧈' },
            { id: 'P500096', name: 'Kerrygold Irish Butter Unsalted 8oz', brand: 'Kerrygold', availability: 'in-stock', facings: 22, images: 2, emoji: '🧈' },
            { id: 'P500097', name: 'Tillamook Butter Unsalted 1lb', brand: 'Tillamook', availability: 'in-stock', facings: 20, images: 2, emoji: '🧈' },

            // Margarine & Spreads
            { id: 'P500098', name: 'Country Crock Original Spread 45oz', brand: 'Country Crock', availability: 'in-stock', facings: 24, images: 2, emoji: '🧈' },
            { id: 'P500099', name: 'I Can\'t Believe It\'s Not Butter 15oz', brand: 'I Can\'t Believe It\'s Not Butter', availability: 'in-stock', facings: 22, images: 2, emoji: '🧈' },
            { id: 'P500100', name: 'Smart Balance Buttery Spread 15oz', brand: 'Smart Balance', availability: 'in-stock', facings: 18, images: 2, emoji: '🧈' },
            { id: 'P500101', name: 'Earth Balance Vegan Buttery Spread 15oz', brand: 'Earth Balance', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🧈' },

            // Cream Cheese
            { id: 'P500102', name: 'Philadelphia Original Cream Cheese 8oz', brand: 'Philadelphia', availability: 'in-stock', facings: 36, images: 3, emoji: '🧀' },
            { id: 'P500103', name: 'Philadelphia 1/3 Less Fat Cream Cheese 8oz', brand: 'Philadelphia', availability: 'in-stock', facings: 30, images: 3, emoji: '🧀' },
            { id: 'P500104', name: 'Philadelphia Chive & Onion Cream Cheese 8oz', brand: 'Philadelphia', availability: 'in-stock', facings: 26, images: 2, emoji: '🧀' },
            { id: 'P500105', name: 'Philadelphia Garden Vegetable Cream Cheese 8oz', brand: 'Philadelphia', availability: 'in-stock', facings: 22, images: 2, emoji: '🧀' },
            { id: 'P500106', name: 'Philadelphia Strawberry Cream Cheese 8oz', brand: 'Philadelphia', availability: 'in-stock', facings: 18, images: 2, emoji: '🧀' },
            { id: 'P500107', name: 'Kite Hill Almond Milk Cream Cheese 8oz', brand: 'Kite Hill', availability: 'in-stock', facings: 14, images: 2, emoji: '🧀' },

            // Sour Cream
            { id: 'P500108', name: 'Daisy Sour Cream 16oz', brand: 'Daisy', availability: 'in-stock', facings: 32, images: 3, emoji: '🥛' },
            { id: 'P500109', name: 'Daisy Sour Cream 24oz', brand: 'Daisy', availability: 'in-stock', facings: 28, images: 2, emoji: '🥛' },
            { id: 'P500110', name: 'Daisy Light Sour Cream 16oz', brand: 'Daisy', availability: 'in-stock', facings: 24, images: 2, emoji: '🥛' },
            { id: 'P500111', name: 'Signature SELECT Sour Cream 16oz', brand: 'Signature SELECT', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🥛' },
            { id: 'P500112', name: 'Nancy\'s Organic Sour Cream 16oz', brand: 'Nancy\'s', availability: 'in-stock', facings: 20, images: 2, emoji: '🥛' },

            // Cottage Cheese
            { id: 'P500113', name: 'Daisy Cottage Cheese 4% 16oz', brand: 'Daisy', availability: 'in-stock', facings: 26, images: 2, emoji: '🥛' },
            { id: 'P500114', name: 'Daisy Cottage Cheese 2% 16oz', brand: 'Daisy', availability: 'in-stock', facings: 24, images: 2, emoji: '🥛' },
            { id: 'P500115', name: 'Good Culture Cottage Cheese 16oz', brand: 'Good Culture', availability: 'in-stock', facings: 20, images: 2, emoji: '🥛' },
            { id: 'P500116', name: 'Nancy\'s Organic Cottage Cheese 16oz', brand: 'Nancy\'s', availability: 'in-stock', facings: 18, images: 2, emoji: '🥛' },

            // Cream - Heavy & Light
            { id: 'P500117', name: 'Organic Valley Heavy Whipping Cream Pint', brand: 'Organic Valley', availability: 'in-stock', facings: 24, images: 2, emoji: '🥛' },
            { id: 'P500118', name: 'Horizon Heavy Whipping Cream Pint', brand: 'Horizon', availability: 'in-stock', facings: 22, images: 2, emoji: '🥛' },
            { id: 'P500119', name: 'Land O Lakes Heavy Whipping Cream Pint', brand: 'Land O Lakes', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🥛' },
            { id: 'P500120', name: 'Signature SELECT Heavy Cream Pint', brand: 'Signature SELECT', availability: 'in-stock', facings: 20, images: 2, emoji: '🥛' },
            { id: 'P500121', name: 'Horizon Light Cream Pint', brand: 'Horizon', availability: 'in-stock', facings: 18, images: 2, emoji: '🥛' },

            // Half & Half
            { id: 'P500122', name: 'Organic Valley Half & Half Pint', brand: 'Organic Valley', availability: 'in-stock', facings: 26, images: 2, emoji: '🥛' },
            { id: 'P500123', name: 'Horizon Half & Half Pint', brand: 'Horizon', availability: 'in-stock', facings: 24, images: 2, emoji: '🥛' },
            { id: 'P500124', name: 'Land O Lakes Half & Half Quart', brand: 'Land O Lakes', availability: 'in-stock', facings: 22, images: 2, emoji: '🥛' },
            { id: 'P500125', name: 'Signature SELECT Half & Half Pint', brand: 'Signature SELECT', availability: 'in-stock', facings: 20, images: 2, emoji: '🥛' },
            { id: 'P500126', name: 'Chobani Oat Milk Barista Blend Half & Half 24oz', brand: 'Chobani', availability: 'in-stock', facings: 16, images: 2, emoji: '🥛' },

            // Whipped Topping
            { id: 'P500127', name: 'Cool Whip Original 8oz', brand: 'Cool Whip', availability: 'in-stock', facings: 28, images: 2, emoji: '🍦' },
            { id: 'P500128', name: 'Cool Whip Extra Creamy 8oz', brand: 'Cool Whip', availability: 'in-stock', facings: 24, images: 2, emoji: '🍦' },
            { id: 'P500129', name: 'Reddi-wip Original Whipped Cream 13oz', brand: 'Reddi-wip', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🍦' },
            { id: 'P500130', name: 'Land O Lakes Aerosol Whipped Cream 13oz', brand: 'Land O Lakes', availability: 'in-stock', facings: 20, images: 2, emoji: '🍦' },

            // Eggs - Large
            { id: 'P500131', name: 'Cage Free Large Eggs Dozen', brand: 'Signature SELECT', availability: 'in-stock', facings: 40, images: 3, emoji: '🥚' },
            { id: 'P500132', name: 'Organic Free Range Large Eggs Dozen', brand: 'Vital Farms', availability: 'in-stock', facings: 32, images: 3, emoji: '🥚' },
            { id: 'P500133', name: 'Happy Egg Organic Large Eggs Dozen', brand: 'Happy Egg', availability: 'in-stock', facings: 28, images: 2, emoji: '🥚' },
            { id: 'P500134', name: 'Pete and Gerry\'s Organic Eggs Dozen', brand: 'Pete and Gerry\'s', availability: 'in-stock', facings: 26, images: 2, emoji: '🥚' },
            { id: 'P500135', name: 'Eggland\'s Best Large Eggs Dozen', brand: 'Eggland\'s Best', availability: 'in-stock', facings: 36, images: 3, emoji: '🥚' },
            { id: 'P500136', name: 'Eggland\'s Best Organic Eggs Dozen', brand: 'Eggland\'s Best', availability: 'in-stock', facings: 30, images: 2, emoji: '🥚' },

            // Eggs - Extra Large & Jumbo
            { id: 'P500137', name: 'Cage Free Extra Large Eggs Dozen', brand: 'Signature SELECT', availability: 'in-stock', facings: 28, images: 2, emoji: '🥚' },
            { id: 'P500138', name: 'Eggland\'s Best Extra Large Eggs Dozen', brand: 'Eggland\'s Best', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🥚' },
            { id: 'P500139', name: 'Jumbo Eggs Dozen', brand: 'Signature SELECT', availability: 'in-stock', facings: 22, images: 2, emoji: '🥚' },

            // Eggs - Egg Whites & Liquid
            { id: 'P500140', name: 'Egg Beaters Original 32oz', brand: 'Egg Beaters', availability: 'in-stock', facings: 20, images: 2, emoji: '🥚' },
            { id: 'P500141', name: 'Eggland\'s Best 100% Egg Whites 32oz', brand: 'Eggland\'s Best', availability: 'in-stock', facings: 18, images: 2, emoji: '🥚' },
            { id: 'P500142', name: 'Simply Egg Whites 16oz', brand: 'Simply', availability: 'in-stock', facings: 16, images: 2, emoji: '🥚' },

            // Dips & Spreads
            { id: 'P500143', name: 'Sabra Classic Hummus 10oz', brand: 'Sabra', availability: 'in-stock', facings: 28, images: 3, emoji: '🥙' },
            { id: 'P500144', name: 'Sabra Roasted Red Pepper Hummus 10oz', brand: 'Sabra', availability: 'in-stock', facings: 24, images: 2, emoji: '🥙' },
            { id: 'P500145', name: 'Sabra Pine Nut Hummus 10oz', brand: 'Sabra', availability: 'in-stock', facings: 20, images: 2, emoji: '🥙' },
            { id: 'P500146', name: 'Tribe Classic Hummus 10oz', brand: 'Tribe', availability: 'in-stock', facings: 22, images: 2, emoji: '🥙' },
            { id: 'P500147', name: 'Hope Foods Organic Hummus 8oz', brand: 'Hope', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🥙' },
            { id: 'P500148', name: 'Wholly Guacamole Classic 12oz', brand: 'Wholly Guacamole', availability: 'in-stock', facings: 26, images: 2, emoji: '🥑' },
            { id: 'P500149', name: 'Good Foods Guacamole 12oz', brand: 'Good Foods', availability: 'in-stock', facings: 22, images: 2, emoji: '🥑' },
            { id: 'P500150', name: 'Fritos Bean Dip 9oz', brand: 'Fritos', availability: 'in-stock', facings: 20, images: 2, emoji: '🫘' },

            // Refrigerated Dough
            { id: 'P500151', name: 'Pillsbury Crescent Rolls 8oz', brand: 'Pillsbury', availability: 'in-stock', facings: 32, images: 3, emoji: '🥐' },
            { id: 'P500152', name: 'Pillsbury Grands Biscuits 16.3oz', brand: 'Pillsbury', availability: 'in-stock', facings: 30, images: 3, emoji: '🥐' },
            { id: 'P500153', name: 'Pillsbury Cinnamon Rolls 12.4oz', brand: 'Pillsbury', availability: 'in-stock', facings: 28, images: 3, emoji: '🥐' },
            { id: 'P500154', name: 'Pillsbury Pizza Dough 13.8oz', brand: 'Pillsbury', availability: 'in-stock', facings: 24, images: 2, emoji: '🍕' },
            { id: 'P500155', name: 'Pillsbury Chocolate Chip Cookie Dough 16oz', brand: 'Pillsbury', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🍪' },
            { id: 'P500156', name: 'Immaculate Baking Co. Biscuits 7.5oz', brand: 'Immaculate', availability: 'in-stock', facings: 16, images: 2, emoji: '🥐' },

            // Dairy Alternative Cheeses
            { id: 'P500157', name: 'Daiya Mozzarella Style Shreds 8oz', brand: 'Daiya', availability: 'in-stock', facings: 18, images: 2, emoji: '🧀' },
            { id: 'P500158', name: 'Daiya Cheddar Style Shreds 8oz', brand: 'Daiya', availability: 'in-stock', facings: 16, images: 2, emoji: '🧀' },
            { id: 'P500159', name: 'Violife Parmesan Wedge 5.3oz', brand: 'Violife', availability: 'in-stock', facings: 12, images: 2, emoji: '🧀' },
            { id: 'P500160', name: 'Follow Your Heart Mozzarella Slices 7oz', brand: 'Follow Your Heart', availability: 'in-stock', facings: 10, images: 2, emoji: '🧀' },

            // Probiotic Drinks
            { id: 'P500161', name: 'Lifeway Kefir Strawberry 32oz', brand: 'Lifeway', availability: 'in-stock', facings: 20, images: 2, emoji: '🥛' },
            { id: 'P500162', name: 'Lifeway Kefir Plain 32oz', brand: 'Lifeway', availability: 'in-stock', facings: 18, images: 2, emoji: '🥛' },
            { id: 'P500163', name: 'Lifeway Kefir Blueberry 32oz', brand: 'Lifeway', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🥛' },

            // Pudding & Desserts
            { id: 'P500164', name: 'Jell-O Chocolate Pudding 4pk', brand: 'Jell-O', availability: 'in-stock', facings: 26, images: 2, emoji: '🍮' },
            { id: 'P500165', name: 'Jell-O Vanilla Pudding 4pk', brand: 'Jell-O', availability: 'in-stock', facings: 24, images: 2, emoji: '🍮' },
            { id: 'P500166', name: 'Jell-O Tapioca Pudding 4pk', brand: 'Jell-O', availability: 'in-stock', facings: 18, images: 2, emoji: '🍮' },
            { id: 'P500167', name: 'Kozy Shack Rice Pudding 22oz', brand: 'Kozy Shack', availability: 'in-stock', facings: 16, images: 2, emoji: '🍮' },
            { id: 'P500168', name: 'Snack Pack Chocolate Pudding 6pk', brand: 'Snack Pack', availability: 'in-stock', facings: 20, images: 2, emoji: '🍮' },

            // Specialty Dairy
            { id: 'P500169', name: 'Daisy Squeeze Sour Cream 14oz', brand: 'Daisy', availability: 'in-stock', facings: 16, images: 2, emoji: '🥛' },
            { id: 'P500170', name: 'Ricotta Cheese 15oz', brand: 'BelGioioso', availability: 'in-stock', facings: 20, images: 2, emoji: '🧀' },
            { id: 'P500171', name: 'Mascarpone Cheese 8oz', brand: 'BelGioioso', availability: 'in-stock', facings: 14, images: 2, emoji: '🧀' }
        ]
    },
    5: {
        id: 5,
        datetime: new Date(Date.now() - 24 * 60 * 60 * 1000),
        category: 'Frozen Foods',
        products: [
            // Ice Cream - Ben & Jerry's
            { id: 'P600001', name: 'Ben & Jerry\'s Chocolate Chip Cookie Dough Pint', brand: 'Ben & Jerry\'s', availability: 'in-stock', facings: 28, images: 3, emoji: '🍦' },
            { id: 'P600002', name: 'Ben & Jerry\'s Half Baked Pint', brand: 'Ben & Jerry\'s', availability: 'in-stock', facings: 26, images: 3, emoji: '🍦' },
            { id: 'P600003', name: 'Ben & Jerry\'s Cherry Garcia Pint', brand: 'Ben & Jerry\'s', availability: 'in-stock', facings: 24, images: 2, emoji: '🍦' },
            { id: 'P600004', name: 'Ben & Jerry\'s Chunky Monkey Pint', brand: 'Ben & Jerry\'s', availability: 'in-stock', facings: 22, images: 2, emoji: '🍦' },
            { id: 'P600005', name: 'Ben & Jerry\'s Phish Food Pint', brand: 'Ben & Jerry\'s', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🍦' },
            { id: 'P600006', name: 'Ben & Jerry\'s The Tonight Dough Pint', brand: 'Ben & Jerry\'s', availability: 'in-stock', facings: 20, images: 2, emoji: '🍦' },
            { id: 'P600007', name: 'Ben & Jerry\'s Americone Dream Pint', brand: 'Ben & Jerry\'s', availability: 'in-stock', facings: 18, images: 2, emoji: '🍦' },
            { id: 'P600008', name: 'Ben & Jerry\'s Strawberry Cheesecake Pint', brand: 'Ben & Jerry\'s', availability: 'in-stock', facings: 16, images: 2, emoji: '🍦' },

            // Ice Cream - Häagen-Dazs
            { id: 'P600009', name: 'Häagen-Dazs Vanilla Pint', brand: 'Häagen-Dazs', availability: 'in-stock', facings: 26, images: 3, emoji: '🍦' },
            { id: 'P600010', name: 'Häagen-Dazs Chocolate Pint', brand: 'Häagen-Dazs', availability: 'in-stock', facings: 24, images: 2, emoji: '🍦' },
            { id: 'P600011', name: 'Häagen-Dazs Strawberry Pint', brand: 'Häagen-Dazs', availability: 'in-stock', facings: 20, images: 2, emoji: '🍦' },
            { id: 'P600012', name: 'Häagen-Dazs Coffee Pint', brand: 'Häagen-Dazs', availability: 'in-stock', facings: 18, images: 2, emoji: '🍦' },
            { id: 'P600013', name: 'Häagen-Dazs Caramel Cone Pint', brand: 'Häagen-Dazs', availability: 'in-stock', facings: 16, images: 2, emoji: '🍦' },
            { id: 'P600014', name: 'Häagen-Dazs Dulce de Leche Pint', brand: 'Häagen-Dazs', availability: 'in-stock', facings: 14, images: 2, emoji: '🍦' },

            // Ice Cream - Breyers
            { id: 'P600015', name: 'Breyers Natural Vanilla 48oz', brand: 'Breyers', availability: 'in-stock', facings: 30, images: 3, emoji: '🍦' },
            { id: 'P600016', name: 'Breyers Natural Chocolate 48oz', brand: 'Breyers', availability: 'in-stock', facings: 28, images: 2, emoji: '🍦' },
            { id: 'P600017', name: 'Breyers Natural Strawberry 48oz', brand: 'Breyers', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🍦' },
            { id: 'P600018', name: 'Breyers Cookies & Cream 48oz', brand: 'Breyers', availability: 'in-stock', facings: 24, images: 2, emoji: '🍦' },
            { id: 'P600019', name: 'Breyers Mint Chocolate Chip 48oz', brand: 'Breyers', availability: 'in-stock', facings: 20, images: 2, emoji: '🍦' },

            // Ice Cream - Talenti
            { id: 'P600020', name: 'Talenti Gelato Sea Salt Caramel Pint', brand: 'Talenti', availability: 'in-stock', facings: 22, images: 2, emoji: '🍦' },
            { id: 'P600021', name: 'Talenti Gelato Belgian Chocolate Pint', brand: 'Talenti', availability: 'in-stock', facings: 20, images: 2, emoji: '🍦' },
            { id: 'P600022', name: 'Talenti Gelato Mediterranean Mint Pint', brand: 'Talenti', availability: 'in-stock', facings: 16, images: 2, emoji: '🍦' },
            { id: 'P600023', name: 'Talenti Gelato Vanilla Bean Pint', brand: 'Talenti', availability: 'in-stock', facings: 14, images: 2, emoji: '🍦' },

            // Frozen Pizza - DiGiorno
            { id: 'P600024', name: 'DiGiorno Rising Crust Pepperoni', brand: 'DiGiorno', availability: 'in-stock', facings: 32, images: 3, emoji: '🍕' },
            { id: 'P600025', name: 'DiGiorno Rising Crust Supreme', brand: 'DiGiorno', availability: 'in-stock', facings: 28, images: 3, emoji: '🍕' },
            { id: 'P600026', name: 'DiGiorno Rising Crust Four Cheese', brand: 'DiGiorno', availability: 'in-stock', facings: 26, images: 2, emoji: '🍕' },
            { id: 'P600027', name: 'DiGiorno Thin & Crispy Pepperoni', brand: 'DiGiorno', availability: 'in-stock', facings: 24, images: 2, emoji: '🍕' },
            { id: 'P600028', name: 'DiGiorno Stuffed Crust Five Cheese', brand: 'DiGiorno', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🍕' },

            // Frozen Pizza - Tombstone
            { id: 'P600029', name: 'Tombstone Pepperoni Pizza', brand: 'Tombstone', availability: 'in-stock', facings: 28, images: 2, emoji: '🍕' },
            { id: 'P600030', name: 'Tombstone Supreme Pizza', brand: 'Tombstone', availability: 'in-stock', facings: 24, images: 2, emoji: '🍕' },
            { id: 'P600031', name: 'Tombstone Four Meat Pizza', brand: 'Tombstone', availability: 'in-stock', facings: 20, images: 2, emoji: '🍕' },

            // Frozen Pizza - California Pizza Kitchen
            { id: 'P600032', name: 'CPK BBQ Chicken Pizza', brand: 'California Pizza Kitchen', availability: 'in-stock', facings: 20, images: 2, emoji: '🍕' },
            { id: 'P600033', name: 'CPK Margherita Pizza', brand: 'California Pizza Kitchen', availability: 'in-stock', facings: 18, images: 2, emoji: '🍕' },
            { id: 'P600034', name: 'CPK White Pizza', brand: 'California Pizza Kitchen', availability: 'in-stock', facings: 16, images: 2, emoji: '🍕' },

            // Frozen Pizza - Other
            { id: 'P600035', name: 'Red Baron Classic Crust Pepperoni', brand: 'Red Baron', availability: 'in-stock', facings: 26, images: 2, emoji: '🍕' },
            { id: 'P600036', name: 'Totino\'s Party Pizza Pepperoni', brand: 'Totino\'s', availability: 'in-stock', facings: 30, images: 3, emoji: '🍕' },
            { id: 'P600037', name: 'Totino\'s Pizza Rolls Pepperoni', brand: 'Totino\'s', availability: 'in-stock', facings: 32, images: 3, emoji: '🍕' },
            { id: 'P600038', name: 'Amy\'s Margherita Pizza', brand: 'Amy\'s', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🍕' },

            // Frozen Meals - Stouffer's
            { id: 'P600039', name: 'Stouffer\'s Lasagna with Meat Sauce', brand: 'Stouffer\'s', availability: 'in-stock', facings: 30, images: 3, emoji: '🍝' },
            { id: 'P600040', name: 'Stouffer\'s Mac & Cheese', brand: 'Stouffer\'s', availability: 'in-stock', facings: 28, images: 3, emoji: '🧀' },
            { id: 'P600041', name: 'Stouffer\'s Fettuccini Alfredo', brand: 'Stouffer\'s', availability: 'in-stock', facings: 24, images: 2, emoji: '🍝' },
            { id: 'P600042', name: 'Stouffer\'s Stuffed Peppers', brand: 'Stouffer\'s', availability: 'in-stock', facings: 20, images: 2, emoji: '🫑' },
            { id: 'P600043', name: 'Stouffer\'s Salisbury Steak', brand: 'Stouffer\'s', availability: 'in-stock', facings: 22, images: 2, emoji: '🥩' },
            { id: 'P600044', name: 'Stouffer\'s Chicken Fettuccini', brand: 'Stouffer\'s', availability: 'in-stock', facings: 18, images: 2, emoji: '🍝' },

            // Frozen Meals - Lean Cuisine
            { id: 'P600045', name: 'Lean Cuisine Chicken Teriyaki', brand: 'Lean Cuisine', availability: 'in-stock', facings: 26, images: 2, emoji: '🍱' },
            { id: 'P600046', name: 'Lean Cuisine Chicken Alfredo', brand: 'Lean Cuisine', availability: 'in-stock', facings: 24, images: 2, emoji: '🍝' },
            { id: 'P600047', name: 'Lean Cuisine Sesame Chicken', brand: 'Lean Cuisine', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🍱' },
            { id: 'P600048', name: 'Lean Cuisine Meatloaf', brand: 'Lean Cuisine', availability: 'in-stock', facings: 20, images: 2, emoji: '🥩' },
            { id: 'P600049', name: 'Lean Cuisine Chicken Parmesan', brand: 'Lean Cuisine', availability: 'in-stock', facings: 18, images: 2, emoji: '🍗' },

            // Frozen Meals - Healthy Choice
            { id: 'P600050', name: 'Healthy Choice Beef Merlot', brand: 'Healthy Choice', availability: 'in-stock', facings: 22, images: 2, emoji: '🥩' },
            { id: 'P600051', name: 'Healthy Choice Chicken Marinara', brand: 'Healthy Choice', availability: 'in-stock', facings: 20, images: 2, emoji: '🍗' },
            { id: 'P600052', name: 'Healthy Choice Grilled Chicken Pesto', brand: 'Healthy Choice', availability: 'in-stock', facings: 18, images: 2, emoji: '🍗' },

            // Frozen Meals - Marie Callender's
            { id: 'P600053', name: 'Marie Callender\'s Chicken Pot Pie', brand: 'Marie Callender\'s', availability: 'in-stock', facings: 28, images: 3, emoji: '🥧' },
            { id: 'P600054', name: 'Marie Callender\'s Beef Pot Pie', brand: 'Marie Callender\'s', availability: 'in-stock', facings: 24, images: 2, emoji: '🥧' },
            { id: 'P600055', name: 'Marie Callender\'s Turkey Pot Pie', brand: 'Marie Callender\'s', availability: 'in-stock', facings: 20, images: 2, emoji: '🥧' },

            // Frozen Vegetables - Birds Eye
            { id: 'P600056', name: 'Birds Eye Mixed Vegetables 16oz', brand: 'Birds Eye', availability: 'in-stock', facings: 32, images: 3, emoji: '🥦' },
            { id: 'P600057', name: 'Birds Eye Broccoli Florets 16oz', brand: 'Birds Eye', availability: 'in-stock', facings: 28, images: 2, emoji: '🥦' },
            { id: 'P600058', name: 'Birds Eye Sweet Peas 16oz', brand: 'Birds Eye', availability: 'in-stock', facings: 26, images: 2, emoji: '🫛' },
            { id: 'P600059', name: 'Birds Eye Corn 16oz', brand: 'Birds Eye', availability: 'in-stock', facings: 24, images: 2, emoji: '🌽' },
            { id: 'P600060', name: 'Birds Eye Green Beans 16oz', brand: 'Birds Eye', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🫘' },
            { id: 'P600061', name: 'Birds Eye Cauliflower Florets 16oz', brand: 'Birds Eye', availability: 'in-stock', facings: 20, images: 2, emoji: '🥦' },
            { id: 'P600062', name: 'Birds Eye Steamfresh Broccoli Cuts', brand: 'Birds Eye', availability: 'in-stock', facings: 22, images: 2, emoji: '🥦' },

            // Frozen Vegetables - Green Giant
            { id: 'P600063', name: 'Green Giant Broccoli Florets 12oz', brand: 'Green Giant', availability: 'in-stock', facings: 26, images: 2, emoji: '🥦' },
            { id: 'P600064', name: 'Green Giant Cauliflower 12oz', brand: 'Green Giant', availability: 'in-stock', facings: 22, images: 2, emoji: '🥦' },
            { id: 'P600065', name: 'Green Giant Sweet Corn 12oz', brand: 'Green Giant', availability: 'in-stock', facings: 24, images: 2, emoji: '🌽' },
            { id: 'P600066', name: 'Green Giant Brussels Sprouts 12oz', brand: 'Green Giant', availability: 'in-stock', facings: 18, images: 2, emoji: '🥬' },
            { id: 'P600067', name: 'Green Giant Riced Cauliflower 10oz', brand: 'Green Giant', availability: 'in-stock', facings: 20, images: 2, emoji: '🥦' },

            // Frozen Potatoes
            { id: 'P600068', name: 'Ore-Ida Golden Fries 32oz', brand: 'Ore-Ida', availability: 'in-stock', facings: 34, images: 3, emoji: '🍟' },
            { id: 'P600069', name: 'Ore-Ida Tater Tots 32oz', brand: 'Ore-Ida', availability: 'in-stock', facings: 32, images: 3, emoji: '🥔' },
            { id: 'P600070', name: 'Ore-Ida Extra Crispy Fast Food Fries', brand: 'Ore-Ida', availability: 'in-stock', facings: 28, images: 2, emoji: '🍟' },
            { id: 'P600071', name: 'Ore-Ida Sweet Potato Fries 20oz', brand: 'Ore-Ida', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🍠' },
            { id: 'P600072', name: 'Alexia Sweet Potato Fries 15oz', brand: 'Alexia', availability: 'in-stock', facings: 22, images: 2, emoji: '🍠' },
            { id: 'P600073', name: 'McCain Superfries 28oz', brand: 'McCain', availability: 'in-stock', facings: 24, images: 2, emoji: '🍟' },

            // Frozen Breakfast - Waffles
            { id: 'P600074', name: 'Eggo Homestyle Waffles 24ct', brand: 'Eggo', availability: 'in-stock', facings: 34, images: 3, emoji: '🧇' },
            { id: 'P600075', name: 'Eggo Buttermilk Waffles 24ct', brand: 'Eggo', availability: 'in-stock', facings: 30, images: 3, emoji: '🧇' },
            { id: 'P600076', name: 'Eggo Chocolate Chip Waffles 24ct', brand: 'Eggo', availability: 'in-stock', facings: 26, images: 2, emoji: '🧇' },
            { id: 'P600077', name: 'Eggo Blueberry Waffles 24ct', brand: 'Eggo', availability: 'in-stock', facings: 24, images: 2, emoji: '🧇' },
            { id: 'P600078', name: 'Birch Benders Buttermilk Waffles', brand: 'Birch Benders', availability: 'in-stock', facings: 18, images: 2, emoji: '🧇' },

            // Frozen Breakfast - Pancakes
            { id: 'P600079', name: 'Eggo Buttermilk Pancakes 24ct', brand: 'Eggo', availability: 'in-stock', facings: 28, images: 2, emoji: '🥞' },
            { id: 'P600080', name: 'Eggo Blueberry Pancakes 24ct', brand: 'Eggo', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🥞' },
            { id: 'P600081', name: 'Aunt Jemima Buttermilk Pancakes', brand: 'Pearl Milling Company', availability: 'in-stock', facings: 22, images: 2, emoji: '🥞' },

            // Frozen Breakfast - Breakfast Sandwiches
            { id: 'P600082', name: 'Jimmy Dean Sausage Egg & Cheese Croissant 4pk', brand: 'Jimmy Dean', availability: 'in-stock', facings: 30, images: 3, emoji: '🥐' },
            { id: 'P600083', name: 'Jimmy Dean Bacon Egg & Cheese Biscuit 4pk', brand: 'Jimmy Dean', availability: 'in-stock', facings: 28, images: 2, emoji: '🥯' },
            { id: 'P600084', name: 'Hot Pockets Ham & Cheese 2pk', brand: 'Hot Pockets', availability: 'in-stock', facings: 26, images: 2, emoji: '🥪' },
            { id: 'P600085', name: 'Evol Egg White Breakfast Sandwich', brand: 'Evol', availability: 'in-stock', facings: 18, images: 2, emoji: '🥯' },

            // Frozen Breakfast - Burritos
            { id: 'P600086', name: 'El Monterey Egg Sausage & Cheese Burritos 8pk', brand: 'El Monterey', availability: 'in-stock', facings: 28, images: 3, emoji: '🌯' },
            { id: 'P600087', name: 'Red\'s Egg & Cheese Burrito 6pk', brand: 'Red\'s', availability: 'in-stock', facings: 22, images: 2, emoji: '🌯' },
            { id: 'P600088', name: 'Evol Chicken Sausage Breakfast Burrito', brand: 'Evol', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🌯' },

            // Frozen Appetizers - Chicken
            { id: 'P600089', name: 'Tyson Chicken Nuggets 32oz', brand: 'Tyson', availability: 'in-stock', facings: 36, images: 3, emoji: '🍗' },
            { id: 'P600090', name: 'Tyson Chicken Strips 25oz', brand: 'Tyson', availability: 'in-stock', facings: 32, images: 3, emoji: '🍗' },
            { id: 'P600091', name: 'Tyson Popcorn Chicken 24oz', brand: 'Tyson', availability: 'in-stock', facings: 28, images: 2, emoji: '🍗' },
            { id: 'P600092', name: 'Perdue Chicken Nuggets 29oz', brand: 'Perdue', availability: 'in-stock', facings: 30, images: 2, emoji: '🍗' },
            { id: 'P600093', name: 'Foster Farms Mini Corn Dogs 40ct', brand: 'Foster Farms', availability: 'in-stock', facings: 26, images: 2, emoji: '🌭' },

            // Frozen Appetizers - Snacks
            { id: 'P600094', name: 'TGI Friday\'s Mozzarella Sticks', brand: 'TGI Friday\'s', availability: 'in-stock', facings: 28, images: 2, emoji: '🧀' },
            { id: 'P600095', name: 'TGI Friday\'s Loaded Potato Skins', brand: 'TGI Friday\'s', availability: 'in-stock', facings: 24, images: 2, emoji: '🥔' },
            { id: 'P600096', name: 'TGI Friday\'s Boneless Wings', brand: 'TGI Friday\'s', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🍗' },
            { id: 'P600097', name: 'Bagel Bites Cheese & Pepperoni 40ct', brand: 'Bagel Bites', availability: 'in-stock', facings: 32, images: 3, emoji: '🥯' },
            { id: 'P600098', name: 'Delimex White Meat Chicken Taquitos 23oz', brand: 'Delimex', availability: 'in-stock', facings: 26, images: 2, emoji: '🌮' },

            // Frozen Fish & Seafood
            { id: 'P600099', name: 'Gorton\'s Fish Sticks 24oz', brand: 'Gorton\'s', availability: 'in-stock', facings: 28, images: 2, emoji: '🐟' },
            { id: 'P600100', name: 'Gorton\'s Beer Battered Fish Fillets', brand: 'Gorton\'s', availability: 'in-stock', facings: 24, images: 2, emoji: '🐟' },
            { id: 'P600101', name: 'Gorton\'s Popcorn Shrimp 14oz', brand: 'Gorton\'s', availability: 'in-stock', facings: 20, images: 2, emoji: '🦐' },
            { id: 'P600102', name: 'Mrs. Paul\'s Fish Sticks 24oz', brand: 'Mrs. Paul\'s', availability: 'in-stock', facings: 22, images: 2, emoji: '🐟' },
            { id: 'P600103', name: 'SeaPak Popcorn Shrimp 9oz', brand: 'SeaPak', availability: 'in-stock', facings: 18, images: 2, emoji: '🦐' },

            // Frozen Fruit
            { id: 'P600104', name: 'Dole Strawberries 16oz', brand: 'Dole', availability: 'in-stock', facings: 30, images: 3, emoji: '🍓' },
            { id: 'P600105', name: 'Dole Blueberries 16oz', brand: 'Dole', availability: 'in-stock', facings: 28, images: 2, emoji: '🫐' },
            { id: 'P600106', name: 'Dole Mixed Berry Blend 16oz', brand: 'Dole', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🍓' },
            { id: 'P600107', name: 'Dole Mango Chunks 16oz', brand: 'Dole', availability: 'in-stock', facings: 24, images: 2, emoji: '🥭' },
            { id: 'P600108', name: 'Signature SELECT Strawberries 16oz', brand: 'Signature SELECT', availability: 'in-stock', facings: 26, images: 2, emoji: '🍓' },

            // Frozen Desserts - Pies
            { id: 'P600109', name: 'Sara Lee Classic Cherry Pie', brand: 'Sara Lee', availability: 'in-stock', facings: 24, images: 2, emoji: '🥧' },
            { id: 'P600110', name: 'Sara Lee Classic Apple Pie', brand: 'Sara Lee', availability: 'in-stock', facings: 26, images: 2, emoji: '🥧' },
            { id: 'P600111', name: 'Edwards Key Lime Pie', brand: 'Edwards', availability: 'in-stock', facings: 20, images: 2, emoji: '🥧' },
            { id: 'P600112', name: 'Edwards Pumpkin Pie', brand: 'Edwards', availability: 'in-stock', facings: 18, images: 2, emoji: '🥧' },

            // Frozen Desserts - Cakes & Cheesecakes
            { id: 'P600113', name: 'Sara Lee Original Cream Cheesecake', brand: 'Sara Lee', availability: 'in-stock', facings: 26, images: 3, emoji: '🍰' },
            { id: 'P600114', name: 'Sara Lee Strawberry Cheesecake', brand: 'Sara Lee', availability: 'in-stock', facings: 22, images: 2, emoji: '🍰' },
            { id: 'P600115', name: 'The Cheesecake Factory Original 7"', brand: 'The Cheesecake Factory', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🍰' },
            { id: 'P600116', name: 'Pepperidge Farm Chocolate Cake', brand: 'Pepperidge Farm', availability: 'in-stock', facings: 20, images: 2, emoji: '🎂' },

            // Frozen Desserts - Bars & Novelties
            { id: 'P600117', name: 'Klondike Vanilla Ice Cream Bars 6pk', brand: 'Klondike', availability: 'in-stock', facings: 28, images: 3, emoji: '🍦' },
            { id: 'P600118', name: 'Klondike Heath Bar 6pk', brand: 'Klondike', availability: 'in-stock', facings: 24, images: 2, emoji: '🍦' },
            { id: 'P600119', name: 'Good Humor Strawberry Shortcake 6pk', brand: 'Good Humor', availability: 'in-stock', facings: 26, images: 2, emoji: '🍦' },
            { id: 'P600120', name: 'Drumstick Vanilla 8pk', brand: 'Drumstick', availability: 'in-stock', facings: 30, images: 3, emoji: '🍦' },
            { id: 'P600121', name: 'Drumstick Caramel 8pk', brand: 'Drumstick', availability: 'in-stock', facings: 26, images: 2, emoji: '🍦' },
            { id: 'P600122', name: 'Magnum Double Caramel Ice Cream Bars 3pk', brand: 'Magnum', availability: 'in-stock', facings: 20, images: 2, emoji: '🍦' },
            { id: 'P600123', name: 'Outshine Strawberry Fruit Bars 6pk', brand: 'Outshine', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🍓' },

            // Frozen Sandwiches - Burgers
            { id: 'P600124', name: 'White Castle Cheeseburgers 6pk', brand: 'White Castle', availability: 'in-stock', facings: 28, images: 2, emoji: '🍔' },
            { id: 'P600125', name: 'MorningStar Veggie Burgers 4pk', brand: 'MorningStar Farms', availability: 'in-stock', facings: 22, images: 2, emoji: '🍔' },
            { id: 'P600126', name: 'Impossible Burger Patties 2pk', brand: 'Impossible', availability: 'in-stock', facings: 24, images: 2, emoji: '🍔' },
            { id: 'P600127', name: 'Beyond Burger Patties 2pk', brand: 'Beyond Meat', availability: 'in-stock', facings: 20, images: 2, emoji: '🍔' },

            // Frozen Asian Entrees
            { id: 'P600128', name: 'PF Chang\'s Chicken Fried Rice', brand: 'PF Chang\'s', availability: 'in-stock', facings: 24, images: 2, emoji: '🍚' },
            { id: 'P600129', name: 'PF Chang\'s Orange Chicken', brand: 'PF Chang\'s', availability: 'in-stock', facings: 22, images: 2, emoji: '🍗' },
            { id: 'P600130', name: 'Tai Pei Chicken Fried Rice', brand: 'Tai Pei', availability: 'in-stock', facings: 20, images: 2, emoji: '🍚' },
            { id: 'P600131', name: 'Tai Pei Beef & Broccoli', brand: 'Tai Pei', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🥦' },
            { id: 'P600132', name: 'InnovAsian Orange Chicken', brand: 'InnovAsian', availability: 'in-stock', facings: 18, images: 2, emoji: '🍗' },

            // Frozen Mexican Entrees
            { id: 'P600133', name: 'El Monterey Beef & Bean Burritos 8pk', brand: 'El Monterey', availability: 'in-stock', facings: 30, images: 3, emoji: '🌯' },
            { id: 'P600134', name: 'El Monterey Chicken & Cheese Taquitos', brand: 'El Monterey', availability: 'in-stock', facings: 26, images: 2, emoji: '🌮' },
            { id: 'P600135', name: 'José Olé Beef & Cheese Taquitos', brand: 'José Olé', availability: 'in-stock', facings: 24, images: 2, emoji: '🌮' },
            { id: 'P600136', name: 'Amy\'s Bean & Cheese Burrito', brand: 'Amy\'s', availability: 'in-stock', facings: 18, images: 2, emoji: '🌯' },

            // Frozen Pasta
            { id: 'P600137', name: 'Bertolli Chicken Alfredo & Fettuccine', brand: 'Bertolli', availability: 'in-stock', facings: 24, images: 2, emoji: '🍝' },
            { id: 'P600138', name: 'Bertolli Shrimp Scampi & Linguine', brand: 'Bertolli', availability: 'in-stock', facings: 20, images: 2, emoji: '🍝' },
            { id: 'P600139', name: 'Rana Lobster Ravioli 10oz', brand: 'Giovanni Rana', availability: 'in-stock', facings: 22, images: 2, emoji: '🍝' },
            { id: 'P600140', name: 'Rana Four Cheese Ravioli 10oz', brand: 'Giovanni Rana', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🍝' },

            // Frozen Bakery
            { id: 'P600141', name: 'Pepperidge Farm Garlic Bread', brand: 'Pepperidge Farm', availability: 'in-stock', facings: 30, images: 3, emoji: '🍞' },
            { id: 'P600142', name: 'Pepperidge Farm Texas Toast 5 Cheese', brand: 'Pepperidge Farm', availability: 'in-stock', facings: 26, images: 2, emoji: '🍞' },
            { id: 'P600143', name: 'Rhodes White Dinner Rolls 36ct', brand: 'Rhodes', availability: 'in-stock', facings: 22, images: 2, emoji: '🍞' },
            { id: 'P600144', name: 'Sister Schubert\'s Dinner Yeast Rolls', brand: 'Sister Schubert\'s', availability: 'in-stock', facings: 20, images: 2, emoji: '🍞' },

            // Frozen Skillet Meals
            { id: 'P600145', name: 'Birds Eye Voila! Chicken Alfredo', brand: 'Birds Eye', availability: 'in-stock', facings: 24, images: 2, emoji: '🍳' },
            { id: 'P600146', name: 'Birds Eye Voila! Beef & Broccoli', brand: 'Birds Eye', availability: 'in-stock', facings: 20, images: 2, emoji: '🍳' },
            { id: 'P600147', name: 'Green Giant Pasta Creations Alfredo', brand: 'Green Giant', availability: 'in-stock', facings: 18, images: 2, emoji: '🍳' },

            // Frozen Meat & Protein
            { id: 'P600148', name: 'Foster Farms Boneless Chicken Breast', brand: 'Foster Farms', availability: 'in-stock', facings: 32, images: 3, emoji: '🍗' },
            { id: 'P600149', name: 'Tyson Boneless Skinless Chicken Breasts', brand: 'Tyson', availability: 'in-stock', facings: 30, images: 3, emoji: '🍗' },
            { id: 'P600150', name: 'Perdue Chicken Breast Tenderloins', brand: 'Perdue', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🍗' },
            { id: 'P600151', name: 'Omaha Steaks Butcher\'s Cut Filet Mignons', brand: 'Omaha Steaks', availability: 'in-stock', facings: 18, images: 2, emoji: '🥩' },

            // Frozen Specialty Items
            { id: 'P600152', name: 'Lean Pockets Ham & Cheddar', brand: 'Lean Pockets', availability: 'in-stock', facings: 22, images: 2, emoji: '🥪' },
            { id: 'P600153', name: 'Hot Pockets Pepperoni Pizza 2pk', brand: 'Hot Pockets', availability: 'in-stock', facings: 28, images: 3, emoji: '🍕' },
            { id: 'P600154', name: 'Hot Pockets Philly Steak & Cheese 2pk', brand: 'Hot Pockets', availability: 'in-stock', facings: 24, images: 2, emoji: '🥩' },
            { id: 'P600155', name: 'Lean Cuisine Marketplace Butternut Squash Ravioli', brand: 'Lean Cuisine', availability: 'in-stock', facings: 16, images: 2, emoji: '🍝' },

            // Frozen Smoothie & Açai
            { id: 'P600156', name: 'Sambazon Pure Unsweetened Açai', brand: 'Sambazon', availability: 'in-stock', facings: 20, images: 2, emoji: '🫐' },
            { id: 'P600157', name: 'Dole Smoothie Shakers Strawberry Banana', brand: 'Dole', availability: 'in-stock', facings: 22, images: 2, emoji: '🍓' },
            { id: 'P600158', name: 'Dole Smoothie Shakers Mango', brand: 'Dole', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🥭' },

            // More Ice Cream Brands
            { id: 'P600159', name: 'Blue Bell Homemade Vanilla 64oz', brand: 'Blue Bell', availability: 'in-stock', facings: 26, images: 3, emoji: '🍦' },
            { id: 'P600160', name: 'Turkey Hill Vanilla Bean 48oz', brand: 'Turkey Hill', availability: 'in-stock', facings: 22, images: 2, emoji: '🍦' },
            { id: 'P600161', name: 'Edy\'s Slow Churned Vanilla 48oz', brand: 'Edy\'s', availability: 'in-stock', facings: 20, images: 2, emoji: '🍦' },
            { id: 'P600162', name: 'So Delicious Coconut Milk Vanilla 16oz', brand: 'So Delicious', availability: 'in-stock', facings: 16, images: 2, emoji: '🍦' },
            { id: 'P600163', name: 'Halo Top Sea Salt Caramel Pint', brand: 'Halo Top', availability: 'in-stock', facings: 18, images: 2, emoji: '🍦' },

            // More Frozen Breakfast
            { id: 'P600164', name: 'Jimmy Dean Sausage Patties 8oz', brand: 'Jimmy Dean', availability: 'in-stock', facings: 26, images: 2, emoji: '🥩' },
            { id: 'P600165', name: 'Jimmy Dean Bacon 12oz', brand: 'Jimmy Dean', availability: 'in-stock', facings: 24, images: 2, emoji: '🥓' },
            { id: 'P600166', name: 'Simple Truth Organic Hash Browns', brand: 'Simple Truth', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🥔' },

            // Additional Frozen Entrees
            { id: 'P600167', name: 'Banquet Salisbury Steak Meal', brand: 'Banquet', availability: 'in-stock', facings: 24, images: 2, emoji: '🥩' },
            { id: 'P600168', name: 'Banquet Chicken Fried Chicken Meal', brand: 'Banquet', availability: 'in-stock', facings: 22, images: 2, emoji: '🍗' },
            { id: 'P600169', name: 'Hungry-Man Roasted Turkey Dinner', brand: 'Hungry-Man', availability: 'in-stock', facings: 20, images: 2, emoji: '🦃' },
            { id: 'P600170', name: 'Kid Cuisine Chicken Nuggets Meal', brand: 'Kid Cuisine', availability: 'in-stock', facings: 26, images: 2, emoji: '🍗' },

            // More Frozen Vegetables
            { id: 'P600171', name: 'Cascadian Farm Organic Peas', brand: 'Cascadian Farm', availability: 'in-stock', facings: 18, images: 2, emoji: '🫛' },
            { id: 'P600172', name: 'Pictsweet Farms Okra', brand: 'Pictsweet', availability: 'in-stock', facings: 14, images: 2, emoji: '🌿' },
            { id: 'P600173', name: 'Cascadian Farm Organic Broccoli', brand: 'Cascadian Farm', availability: 'in-stock', facings: 16, images: 2, emoji: '🥦' },

            // Additional Items
            { id: 'P600174', name: 'Delimex Beef Taquitos 23oz', brand: 'Delimex', availability: 'in-stock', facings: 22, images: 2, emoji: '🌮' },
            { id: 'P600175', name: 'Celeste Pizza For One Pepperoni', brand: 'Celeste', availability: 'in-stock', facings: 24, images: 2, emoji: '🍕' },
            { id: 'P600176', name: 'Michelina\'s Fettuccine Alfredo', brand: 'Michelina\'s', availability: 'in-stock', facings: 18, images: 2, emoji: '🍝' }
        ]
    },
    6: {
        id: 6,
        datetime: new Date(Date.now() - 30 * 60 * 60 * 1000),
        category: 'Cereals & Breakfast',
        products: [
            // Cheerios Family
            { id: 'P700001', name: 'Honey Nut Cheerios Family Size', brand: 'General Mills', availability: 'in-stock', facings: 36, images: 3, emoji: '🥣' },
            { id: 'P700002', name: 'Cheerios Original Family Size', brand: 'General Mills', availability: 'in-stock', facings: 34, images: 3, emoji: '🥣' },
            { id: 'P700003', name: 'Multigrain Cheerios', brand: 'General Mills', availability: 'in-stock', facings: 28, images: 2, emoji: '🥣' },
            { id: 'P700004', name: 'Apple Cinnamon Cheerios', brand: 'General Mills', availability: 'in-stock', facings: 24, images: 2, emoji: '🥣' },
            { id: 'P700005', name: 'Frosted Cheerios', brand: 'General Mills', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🥣' },
            { id: 'P700006', name: 'Chocolate Cheerios', brand: 'General Mills', availability: 'in-stock', facings: 20, images: 2, emoji: '🥣' },

            // Lucky Charms & Kids Cereals
            { id: 'P700007', name: 'Lucky Charms Original', brand: 'General Mills', availability: 'in-stock', facings: 32, images: 3, emoji: '🍀' },
            { id: 'P700008', name: 'Lucky Charms Frosted Flakes', brand: 'General Mills', availability: 'in-stock', facings: 26, images: 2, emoji: '🍀' },
            { id: 'P700009', name: 'Trix Cereal', brand: 'General Mills', availability: 'in-stock', facings: 28, images: 2, emoji: '🥣' },
            { id: 'P700010', name: 'Cocoa Puffs', brand: 'General Mills', availability: 'in-stock', facings: 26, images: 2, emoji: '🥣' },
            { id: 'P700011', name: 'Cookie Crisp', brand: 'General Mills', availability: 'in-stock', facings: 24, images: 2, emoji: '🍪' },
            { id: 'P700012', name: 'Reese\'s Puffs', brand: 'General Mills', availability: 'in-stock', facings: 30, images: 3, emoji: '🥜' },
            { id: 'P700013', name: 'Cinnamon Toast Crunch', brand: 'General Mills', availability: 'in-stock', facings: 34, images: 3, emoji: '🥣' },
            { id: 'P700014', name: 'Golden Grahams', brand: 'General Mills', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🥣' },

            // Kellogg's Classic
            { id: 'P700015', name: 'Frosted Flakes Family Size', brand: 'Kellogg\'s', availability: 'in-stock', facings: 36, images: 3, emoji: '🐯' },
            { id: 'P700016', name: 'Froot Loops', brand: 'Kellogg\'s', availability: 'in-stock', facings: 32, images: 3, emoji: '🥣' },
            { id: 'P700017', name: 'Apple Jacks', brand: 'Kellogg\'s', availability: 'in-stock', facings: 28, images: 2, emoji: '🍎' },
            { id: 'P700018', name: 'Corn Flakes', brand: 'Kellogg\'s', availability: 'in-stock', facings: 30, images: 2, emoji: '🌽' },
            { id: 'P700019', name: 'Rice Krispies', brand: 'Kellogg\'s', availability: 'in-stock', facings: 32, images: 2, emoji: '🥣' },
            { id: 'P700020', name: 'Frosted Mini-Wheats Original', brand: 'Kellogg\'s', availability: 'in-stock', facings: 28, images: 2, emoji: '🥣' },
            { id: 'P700021', name: 'Frosted Mini-Wheats Blueberry', brand: 'Kellogg\'s', availability: 'in-stock', facings: 24, images: 2, emoji: '🫐' },
            { id: 'P700022', name: 'Raisin Bran', brand: 'Kellogg\'s', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🥣' },
            { id: 'P700023', name: 'Special K Original', brand: 'Kellogg\'s', availability: 'in-stock', facings: 26, images: 2, emoji: '🥣' },
            { id: 'P700024', name: 'Special K Red Berries', brand: 'Kellogg\'s', availability: 'in-stock', facings: 22, images: 2, emoji: '🍓' },

            // Post Cereals
            { id: 'P700025', name: 'Honey Bunches of Oats Honey Roasted', brand: 'Post', availability: 'in-stock', facings: 30, images: 3, emoji: '🥣' },
            { id: 'P700026', name: 'Honey Bunches of Oats Almond', brand: 'Post', availability: 'in-stock', facings: 26, images: 2, emoji: '🥣' },
            { id: 'P700027', name: 'Grape-Nuts', brand: 'Post', availability: 'in-stock', facings: 20, images: 2, emoji: '🥣' },
            { id: 'P700028', name: 'Fruity Pebbles', brand: 'Post', availability: 'in-stock', facings: 28, images: 3, emoji: '🥣' },
            { id: 'P700029', name: 'Cocoa Pebbles', brand: 'Post', availability: 'in-stock', facings: 26, images: 2, emoji: '🥣' },
            { id: 'P700030', name: 'Raisin Bran', brand: 'Post', availability: 'in-stock', facings: 24, images: 2, emoji: '🥣' },
            { id: 'P700031', name: 'Shredded Wheat Original', brand: 'Post', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🥣' },
            { id: 'P700032', name: 'Great Grains Crunchy Pecan', brand: 'Post', availability: 'in-stock', facings: 18, images: 2, emoji: '🥣' },

            // Quaker Oats & Hot Cereal
            { id: 'P700033', name: 'Quaker Old Fashioned Oats 42oz', brand: 'Quaker', availability: 'in-stock', facings: 32, images: 3, emoji: '🥣' },
            { id: 'P700034', name: 'Quaker Quick Oats 42oz', brand: 'Quaker', availability: 'in-stock', facings: 28, images: 2, emoji: '🥣' },
            { id: 'P700035', name: 'Quaker Instant Oatmeal Variety Pack', brand: 'Quaker', availability: 'in-stock', facings: 30, images: 3, emoji: '🥣' },
            { id: 'P700036', name: 'Quaker Instant Oatmeal Maple & Brown Sugar', brand: 'Quaker', availability: 'in-stock', facings: 26, images: 2, emoji: '🥣' },
            { id: 'P700037', name: 'Quaker Instant Oatmeal Apples & Cinnamon', brand: 'Quaker', availability: 'in-stock', facings: 24, images: 2, emoji: '🍎' },
            { id: 'P700038', name: 'Quaker Instant Grits Original', brand: 'Quaker', availability: 'in-stock', facings: 20, images: 2, emoji: '🥣' },
            { id: 'P700039', name: 'Cream of Wheat Instant 12pk', brand: 'Cream of Wheat', availability: 'in-stock', facings: 18, images: 2, emoji: '🥣' },
            { id: 'P700040', name: 'McCann\'s Irish Oatmeal Steel Cut', brand: 'McCann\'s', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🥣' },

            // Granola
            { id: 'P700041', name: 'Nature Valley Oats \'n Honey Granola', brand: 'Nature Valley', availability: 'in-stock', facings: 24, images: 2, emoji: '🥣' },
            { id: 'P700042', name: 'Quaker Simply Granola Oats & Honey', brand: 'Quaker', availability: 'in-stock', facings: 22, images: 2, emoji: '🥣' },
            { id: 'P700043', name: 'Kind Healthy Grains Vanilla Blueberry', brand: 'KIND', availability: 'in-stock', facings: 18, images: 2, emoji: '🫐' },
            { id: 'P700044', name: 'Bear Naked Fit Triple Berry Granola', brand: 'Bear Naked', availability: 'in-stock', facings: 16, images: 2, emoji: '🥣' },

            // Kashi & Healthy Options
            { id: 'P700045', name: 'Kashi GO Lean Original', brand: 'Kashi', availability: 'in-stock', facings: 22, images: 2, emoji: '🥣' },
            { id: 'P700046', name: 'Kashi Heart to Heart Honey Toasted Oat', brand: 'Kashi', availability: 'in-stock', facings: 20, images: 2, emoji: '🥣' },
            { id: 'P700047', name: 'Kashi Cinnamon Harvest', brand: 'Kashi', availability: 'in-stock', facings: 18, images: 2, emoji: '🥣' },
            { id: 'P700048', name: 'Cascadian Farm Organic Honey Oat Crunch', brand: 'Cascadian Farm', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🥣' },

            // Cap'n Crunch
            { id: 'P700049', name: 'Cap\'n Crunch Original', brand: 'Cap\'n Crunch', availability: 'in-stock', facings: 26, images: 3, emoji: '⛵' },
            { id: 'P700050', name: 'Cap\'n Crunch Berries', brand: 'Cap\'n Crunch', availability: 'in-stock', facings: 24, images: 2, emoji: '⛵' },
            { id: 'P700051', name: 'Cap\'n Crunch Peanut Butter', brand: 'Cap\'n Crunch', availability: 'in-stock', facings: 20, images: 2, emoji: '⛵' },

            // Life & Chex
            { id: 'P700052', name: 'Life Original Cereal', brand: 'Quaker', availability: 'in-stock', facings: 24, images: 2, emoji: '🥣' },
            { id: 'P700053', name: 'Cinnamon Life', brand: 'Quaker', availability: 'in-stock', facings: 20, images: 2, emoji: '🥣' },
            { id: 'P700054', name: 'Chex Rice', brand: 'General Mills', availability: 'in-stock', facings: 22, images: 2, emoji: '🥣' },
            { id: 'P700055', name: 'Chex Corn', brand: 'General Mills', availability: 'in-stock', facings: 20, images: 2, emoji: '🥣' },
            { id: 'P700056', name: 'Chex Wheat', brand: 'General Mills', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🥣' },
            { id: 'P700057', name: 'Cinnamon Chex', brand: 'General Mills', availability: 'in-stock', facings: 18, images: 2, emoji: '🥣' },

            // Pop-Tarts
            { id: 'P700058', name: 'Pop-Tarts Strawberry 12ct', brand: 'Pop-Tarts', availability: 'in-stock', facings: 34, images: 3, emoji: '🍓' },
            { id: 'P700059', name: 'Pop-Tarts Brown Sugar Cinnamon 12ct', brand: 'Pop-Tarts', availability: 'in-stock', facings: 32, images: 3, emoji: '🥧' },
            { id: 'P700060', name: 'Pop-Tarts Blueberry 12ct', brand: 'Pop-Tarts', availability: 'in-stock', facings: 28, images: 2, emoji: '🫐' },
            { id: 'P700061', name: 'Pop-Tarts S\'mores 12ct', brand: 'Pop-Tarts', availability: 'in-stock', facings: 26, images: 2, emoji: '🍫' },
            { id: 'P700062', name: 'Pop-Tarts Cookies & Creme 12ct', brand: 'Pop-Tarts', availability: 'in-stock', facings: 24, images: 2, emoji: '🍪' },
            { id: 'P700063', name: 'Pop-Tarts Frosted Cherry 12ct', brand: 'Pop-Tarts', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🍒' },
            { id: 'P700064', name: 'Pop-Tarts Cinnamon Rolls 12ct', brand: 'Pop-Tarts', availability: 'in-stock', facings: 20, images: 2, emoji: '🥐' },

            // Toaster Pastries - Other Brands
            { id: 'P700065', name: 'Toaster Strudel Strawberry 6ct', brand: 'Toaster Strudel', availability: 'in-stock', facings: 28, images: 2, emoji: '🍓' },
            { id: 'P700066', name: 'Toaster Strudel Blueberry 6ct', brand: 'Toaster Strudel', availability: 'in-stock', facings: 24, images: 2, emoji: '🫐' },
            { id: 'P700067', name: 'Toaster Strudel Apple 6ct', brand: 'Toaster Strudel', availability: 'in-stock', facings: 20, images: 2, emoji: '🍎' },

            // Pancake Mix
            { id: 'P700068', name: 'Bisquick Original Pancake Mix 40oz', brand: 'Bisquick', availability: 'in-stock', facings: 30, images: 3, emoji: '🥞' },
            { id: 'P700069', name: 'Aunt Jemima Original Pancake Mix 32oz', brand: 'Pearl Milling Company', availability: 'in-stock', facings: 28, images: 2, emoji: '🥞' },
            { id: 'P700070', name: 'Aunt Jemima Buttermilk Pancake Mix 32oz', brand: 'Pearl Milling Company', availability: 'in-stock', facings: 26, images: 2, emoji: '🥞' },
            { id: 'P700071', name: 'Krusteaz Buttermilk Pancake Mix 32oz', brand: 'Krusteaz', availability: 'in-stock', facings: 24, images: 2, emoji: '🥞' },
            { id: 'P700072', name: 'Kodiak Cakes Power Cakes Mix 20oz', brand: 'Kodiak Cakes', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🥞' },
            { id: 'P700073', name: 'Hungry Jack Complete Pancake Mix', brand: 'Hungry Jack', availability: 'in-stock', facings: 22, images: 2, emoji: '🥞' },

            // Waffle Mix
            { id: 'P700074', name: 'Aunt Jemima Original Waffle Mix 32oz', brand: 'Pearl Milling Company', availability: 'in-stock', facings: 24, images: 2, emoji: '🧇' },
            { id: 'P700075', name: 'Krusteaz Belgian Waffle Mix 28oz', brand: 'Krusteaz', availability: 'in-stock', facings: 20, images: 2, emoji: '🧇' },

            // Syrup
            { id: 'P700076', name: 'Aunt Jemima Original Syrup 24oz', brand: 'Pearl Milling Company', availability: 'in-stock', facings: 32, images: 3, emoji: '🍯' },
            { id: 'P700077', name: 'Mrs. Butterworth\'s Original Syrup 24oz', brand: 'Mrs. Butterworth\'s', availability: 'in-stock', facings: 28, images: 2, emoji: '🍯' },
            { id: 'P700078', name: 'Log Cabin Original Syrup 24oz', brand: 'Log Cabin', availability: 'in-stock', facings: 26, images: 2, emoji: '🍯' },
            { id: 'P700079', name: 'Hungry Jack Original Syrup 27.6oz', brand: 'Hungry Jack', availability: 'in-stock', facings: 24, images: 2, emoji: '🍯' },
            { id: 'P700080', name: 'Pure Maple Syrup Grade A 12oz', brand: 'Signature SELECT', availability: 'in-stock', facings: 22, images: 2, emoji: '🍁' },
            { id: 'P700081', name: 'Vermont Maid Sugar Free Syrup', brand: 'Vermont Maid', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🍯' },

            // Breakfast Bars
            { id: 'P700082', name: 'Nutri-Grain Strawberry Bars 8ct', brand: 'Nutri-Grain', availability: 'in-stock', facings: 30, images: 3, emoji: '🍓' },
            { id: 'P700083', name: 'Nutri-Grain Blueberry Bars 8ct', brand: 'Nutri-Grain', availability: 'in-stock', facings: 26, images: 2, emoji: '🫐' },
            { id: 'P700084', name: 'Nutri-Grain Apple Cinnamon Bars 8ct', brand: 'Nutri-Grain', availability: 'in-stock', facings: 24, images: 2, emoji: '🍎' },
            { id: 'P700085', name: 'Belvita Breakfast Biscuits Blueberry', brand: 'belVita', availability: 'in-stock', facings: 28, images: 2, emoji: '🫐' },
            { id: 'P700086', name: 'Belvita Breakfast Biscuits Cinnamon Brown Sugar', brand: 'belVita', availability: 'in-stock', facings: 26, images: 2, emoji: '🍪' },
            { id: 'P700087', name: 'Belvita Breakfast Biscuits Golden Oat', brand: 'belVita', availability: 'in-stock', facings: 22, images: 2, emoji: '🍪' },

            // Breakfast Drinks
            { id: 'P700088', name: 'Carnation Breakfast Essentials Chocolate', brand: 'Carnation', availability: 'in-stock', facings: 24, images: 2, emoji: '🥤' },
            { id: 'P700089', name: 'Carnation Breakfast Essentials Vanilla', brand: 'Carnation', availability: 'in-stock', facings: 20, images: 2, emoji: '🥤' },
            { id: 'P700090', name: 'Ensure Original Nutrition Vanilla 6pk', brand: 'Ensure', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🥤' },
            { id: 'P700091', name: 'Boost Original Chocolate 6pk', brand: 'Boost', availability: 'in-stock', facings: 18, images: 2, emoji: '🥤' },

            // Muffin & Quick Bread Mix
            { id: 'P700092', name: 'Krusteaz Blueberry Muffin Mix', brand: 'Krusteaz', availability: 'in-stock', facings: 22, images: 2, emoji: '🧁' },
            { id: 'P700093', name: 'Krusteaz Banana Nut Muffin Mix', brand: 'Krusteaz', availability: 'in-stock', facings: 18, images: 2, emoji: '🧁' },
            { id: 'P700094', name: 'Jiffy Corn Muffin Mix 8.5oz', brand: 'Jiffy', availability: 'in-stock', facings: 26, images: 2, emoji: '🧁' },
            { id: 'P700095', name: 'Martha White Cornbread Mix', brand: 'Martha White', availability: 'in-stock', facings: 20, images: 2, emoji: '🌽' },
            { id: 'P700096', name: 'Krusteaz Pumpkin Bread Mix', brand: 'Krusteaz', availability: 'in-stock', facings: 16, images: 2, emoji: '🎃' },

            // Protein Cereals
            { id: 'P700097', name: 'Magic Spoon Fruity Cereal', brand: 'Magic Spoon', availability: 'in-stock', facings: 16, images: 2, emoji: '🥣' },
            { id: 'P700098', name: 'Catalina Crunch Honey Graham', brand: 'Catalina Crunch', availability: 'in-stock', facings: 14, images: 2, emoji: '🥣' },
            { id: 'P700099', name: 'Three Wishes Honey Cereal', brand: 'Three Wishes', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🥣' },

            // More General Mills
            { id: 'P700100', name: 'Wheaties Original', brand: 'General Mills', availability: 'in-stock', facings: 22, images: 2, emoji: '🥣' },
            { id: 'P700101', name: 'Total Whole Grain', brand: 'General Mills', availability: 'in-stock', facings: 18, images: 2, emoji: '🥣' },
            { id: 'P700102', name: 'Fiber One Original', brand: 'General Mills', availability: 'in-stock', facings: 20, images: 2, emoji: '🥣' },
            { id: 'P700103', name: 'Fiber One Honey Clusters', brand: 'General Mills', availability: 'in-stock', facings: 18, images: 2, emoji: '🥣' },

            // More Kellogg's
            { id: 'P700104', name: 'Kellogg\'s All-Bran Original', brand: 'Kellogg\'s', availability: 'in-stock', facings: 18, images: 2, emoji: '🥣' },
            { id: 'P700105', name: 'Krave Double Chocolate', brand: 'Kellogg\'s', availability: 'in-stock', facings: 22, images: 2, emoji: '🍫' },
            { id: 'P700106', name: 'Kellogg\'s Corn Pops', brand: 'Kellogg\'s', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🥣' },
            { id: 'P700107', name: 'Kellogg\'s Crispix', brand: 'Kellogg\'s', availability: 'in-stock', facings: 16, images: 2, emoji: '🥣' },
            { id: 'P700108', name: 'Kellogg\'s Smacks', brand: 'Kellogg\'s', availability: 'in-stock', facings: 18, images: 2, emoji: '🥣' },

            // More Post
            { id: 'P700109', name: 'Alpha-Bits Cereal', brand: 'Post', availability: 'in-stock', facings: 20, images: 2, emoji: '🥣' },
            { id: 'P700110', name: 'Golden Crisp', brand: 'Post', availability: 'in-stock', facings: 18, images: 2, emoji: '🥣' },
            { id: 'P700111', name: 'Waffle Crisp', brand: 'Post', availability: 'in-stock', facings: 16, images: 2, emoji: '🧇' },

            // Store Brand Cereals
            { id: 'P700112', name: 'Signature SELECT Honey Nut O\'s', brand: 'Signature SELECT', availability: 'in-stock', facings: 28, images: 2, emoji: '🥣' },
            { id: 'P700113', name: 'Signature SELECT Crispy Rice', brand: 'Signature SELECT', availability: 'in-stock', facings: 24, images: 2, emoji: '🥣' },
            { id: 'P700114', name: 'Signature SELECT Frosted Flakes', brand: 'Signature SELECT', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🥣' },
            { id: 'P700115', name: 'Signature SELECT Raisin Bran', brand: 'Signature SELECT', availability: 'in-stock', facings: 20, images: 2, emoji: '🥣' },

            // Oatmeal Cups & Instant
            { id: 'P700116', name: 'Quaker Oatmeal Express Cups Variety', brand: 'Quaker', availability: 'in-stock', facings: 22, images: 2, emoji: '🥣' },
            { id: 'P700117', name: 'Better Oats Instant Oatmeal Variety', brand: 'Better Oats', availability: 'in-stock', facings: 18, images: 2, emoji: '🥣' },

            // Cream of Wheat Varieties
            { id: 'P700118', name: 'Cream of Wheat Original Canister', brand: 'Cream of Wheat', availability: 'in-stock', facings: 20, images: 2, emoji: '🥣' },
            { id: 'P700119', name: 'Cream of Wheat Maple Brown Sugar Instant', brand: 'Cream of Wheat', availability: 'in-stock', facings: 16, images: 2, emoji: '🥣' },

            // Malt-O-Meal Bagged Cereals
            { id: 'P700120', name: 'Malt-O-Meal Frosted Flakes 36oz', brand: 'Malt-O-Meal', availability: 'in-stock', facings: 26, images: 2, emoji: '🥣' },
            { id: 'P700121', name: 'Malt-O-Meal Honey Nut Scooters 36oz', brand: 'Malt-O-Meal', availability: 'in-stock', facings: 24, images: 2, emoji: '🥣' },
            { id: 'P700122', name: 'Malt-O-Meal Fruity Dyno-Bites 36oz', brand: 'Malt-O-Meal', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🥣' },
            { id: 'P700123', name: 'Malt-O-Meal Cocoa Dyno-Bites 36oz', brand: 'Malt-O-Meal', availability: 'in-stock', facings: 20, images: 2, emoji: '🥣' },

            // Bob's Red Mill
            { id: 'P700124', name: 'Bob\'s Red Mill Rolled Oats 32oz', brand: 'Bob\'s Red Mill', availability: 'in-stock', facings: 18, images: 2, emoji: '🥣' },
            { id: 'P700125', name: 'Bob\'s Red Mill Steel Cut Oats 24oz', brand: 'Bob\'s Red Mill', availability: 'in-stock', facings: 16, images: 2, emoji: '🥣' },
            { id: 'P700126', name: 'Bob\'s Red Mill Muesli 18oz', brand: 'Bob\'s Red Mill', availability: 'in-stock', facings: 14, images: 2, emoji: '🥣' },

            // Specialty Granola
            { id: 'P700127', name: 'Cascadian Farm Organic Granola Oats & Honey', brand: 'Cascadian Farm', availability: 'in-stock', facings: 18, images: 2, emoji: '🥣' },
            { id: 'P700128', name: 'KIND Vanilla Blueberry Clusters', brand: 'KIND', availability: 'in-stock', facings: 16, images: 2, emoji: '🥣' },
            { id: 'P700129', name: 'Purely Elizabeth Ancient Grain Granola', brand: 'Purely Elizabeth', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🥣' },

            // Breakfast Cookies & Bites
            { id: 'P700130', name: 'Belvita Soft Baked Oats & Chocolate', brand: 'belVita', availability: 'in-stock', facings: 20, images: 2, emoji: '🍪' },
            { id: 'P700131', name: 'Special K Protein Meal Bars', brand: 'Kellogg\'s', availability: 'in-stock', facings: 18, images: 2, emoji: '🍫' },

            // Cereal Bars
            { id: 'P700132', name: 'Kellogg\'s Rice Krispies Treats Original 8ct', brand: 'Kellogg\'s', availability: 'in-stock', facings: 30, images: 3, emoji: '🥣' },
            { id: 'P700133', name: 'Kellogg\'s Rice Krispies Treats Chocolatey Chip', brand: 'Kellogg\'s', availability: 'in-stock', facings: 26, images: 2, emoji: '🍫' },
            { id: 'P700134', name: 'Lucky Charms Treats 8ct', brand: 'General Mills', availability: 'in-stock', facings: 24, images: 2, emoji: '🍀' },
            { id: 'P700135', name: 'Cinnamon Toast Crunch Treats 8ct', brand: 'General Mills', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🥣' },

            // Protein Pancake Mix
            { id: 'P700136', name: 'Kodiak Cakes Buttermilk Flapjack Mix', brand: 'Kodiak Cakes', availability: 'in-stock', facings: 22, images: 2, emoji: '🥞' },
            { id: 'P700137', name: 'Birch Benders Paleo Pancake Mix', brand: 'Birch Benders', availability: 'in-stock', facings: 18, images: 2, emoji: '🥞' },

            // Instant Breakfast Shakes
            { id: 'P700138', name: 'SlimFast Original Shake Mix Chocolate', brand: 'SlimFast', availability: 'in-stock', facings: 16, images: 2, emoji: '🥤' },
            { id: 'P700139', name: 'Ovaltine Classic Malt 12oz', brand: 'Ovaltine', availability: 'in-stock', facings: 14, images: 2, emoji: '🥤' },

            // Breakfast Sausages & Bacon (Shelf Stable)
            { id: 'P700140', name: 'Hormel Black Label Bacon Bits', brand: 'Hormel', availability: 'in-stock', facings: 20, images: 2, emoji: '🥓' },
            { id: 'P700141', name: 'Oscar Mayer Real Bacon Bits', brand: 'Oscar Mayer', availability: 'in-stock', facings: 18, images: 2, emoji: '🥓' },

            // Breakfast Syrups - Specialty
            { id: 'P700142', name: 'Hershey\'s Chocolate Syrup 24oz', brand: 'Hershey\'s', availability: 'in-stock', facings: 24, images: 2, emoji: '🍫' },
            { id: 'P700143', name: 'Smucker\'s Sugar Free Syrup', brand: 'Smucker\'s', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🍯' },
            { id: 'P700144', name: 'Torani Vanilla Syrup 25.4oz', brand: 'Torani', availability: 'in-stock', facings: 16, images: 2, emoji: '🍯' },

            // Breakfast Toppings
            { id: 'P700145', name: 'Smucker\'s Strawberry Jam 18oz', brand: 'Smucker\'s', availability: 'in-stock', facings: 26, images: 2, emoji: '🍓' },
            { id: 'P700146', name: 'Welch\'s Grape Jelly 20oz', brand: 'Welch\'s', availability: 'in-stock', facings: 24, images: 2, emoji: '🍇' },
            { id: 'P700147', name: 'Jif Peanut Butter Creamy 16oz', brand: 'Jif', availability: 'in-stock', facings: 28, images: 3, emoji: '🥜' },
            { id: 'P700148', name: 'Skippy Peanut Butter Creamy 16oz', brand: 'Skippy', availability: 'in-stock', facings: 26, images: 2, emoji: '🥜' },
            { id: 'P700149', name: 'Nutella Hazelnut Spread 13oz', brand: 'Nutella', availability: 'in-stock', facings: 30, images: 3, emoji: '🍫' },

            // Instant Grits
            { id: 'P700150', name: 'Quaker Instant Grits Butter Flavor', brand: 'Quaker', availability: 'in-stock', facings: 18, images: 2, emoji: '🥣' },
            { id: 'P700151', name: 'Quaker Instant Grits Cheese Flavor', brand: 'Quaker', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🧀' },

            // More Breakfast Items
            { id: 'P700152', name: 'Nature\'s Path Organic Flax Plus', brand: 'Nature\'s Path', availability: 'in-stock', facings: 16, images: 2, emoji: '🥣' },
            { id: 'P700153', name: 'Ezekiel 4:9 Sprouted Grain Cereal', brand: 'Food for Life', availability: 'in-stock', facings: 14, images: 2, emoji: '🥣' },
            { id: 'P700154', name: 'Cheerios Protein Oats & Honey', brand: 'General Mills', availability: 'in-stock', facings: 20, images: 2, emoji: '🥣' },
            { id: 'P700155', name: 'Grape-Nuts Flakes', brand: 'Post', availability: 'in-stock', facings: 16, images: 2, emoji: '🥣' },
            { id: 'P700156', name: 'Puffins Peanut Butter Cereal', brand: 'Barbara\'s', availability: 'in-stock', facings: 14, images: 2, emoji: '🥣' },
            { id: 'P700157', name: 'EnviroKidz Amazon Frosted Flakes', brand: 'Nature\'s Path', availability: 'in-stock', facings: 12, images: 2, emoji: '🥣' },

            // Gluten-Free Options
            { id: 'P700158', name: 'Chex Rice Gluten Free', brand: 'General Mills', availability: 'in-stock', facings: 20, images: 2, emoji: '🥣' },
            { id: 'P700159', name: 'Nature\'s Path Mesa Sunrise', brand: 'Nature\'s Path', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🥣' },
            { id: 'P700160', name: 'Enjoy Life Crunchy Flax Granola', brand: 'Enjoy Life', availability: 'in-stock', facings: 14, images: 2, emoji: '🥣' },

            // Additional Bars
            { id: 'P700161', name: 'Zone Perfect Chocolate Peanut Butter Bar', brand: 'Zone Perfect', availability: 'in-stock', facings: 18, images: 2, emoji: '🍫' },
            { id: 'P700162', name: 'Larabar Apple Pie', brand: 'Larabar', availability: 'in-stock', facings: 16, images: 2, emoji: '🍎' },
            { id: 'P700163', name: 'GoMacro Protein Paradise Bar', brand: 'GoMacro', availability: 'in-stock', facings: 14, images: 2, emoji: '🌱' },

            // Final Items
            { id: 'P700164', name: 'Post Oreo O\'s Cereal', brand: 'Post', availability: 'in-stock', facings: 24, images: 3, emoji: '🍪' },
            { id: 'P700165', name: 'Hostess Donettes Cereal', brand: 'Post', availability: 'in-stock', facings: 20, images: 2, emoji: '🍩' },
            { id: 'P700166', name: 'Dunkin\' Caramel Macchiato Cereal', brand: 'Post', availability: 'out-of-stock', facings: 0, images: 1, emoji: '☕' },
            { id: 'P700167', name: 'Cinnamon Toast Crunch Churros', brand: 'General Mills', availability: 'in-stock', facings: 22, images: 2, emoji: '🥣' },
            { id: 'P700168', name: 'French Toast Crunch', brand: 'General Mills', availability: 'in-stock', facings: 18, images: 2, emoji: '🍞' }
        ]
    },
    7: {
        id: 7,
        datetime: new Date(Date.now() - 40 * 60 * 60 * 1000),
        category: 'Baking',
        products: [
            // Flour - All-Purpose
            { id: 'P800001', name: 'Gold Medal All-Purpose Flour 5lb', brand: 'Gold Medal', availability: 'in-stock', facings: 34, images: 3, emoji: '🌾' },
            { id: 'P800002', name: 'Gold Medal All-Purpose Flour 10lb', brand: 'Gold Medal', availability: 'in-stock', facings: 28, images: 2, emoji: '🌾' },
            { id: 'P800003', name: 'Pillsbury Best All-Purpose Flour 5lb', brand: 'Pillsbury', availability: 'in-stock', facings: 30, images: 3, emoji: '🌾' },
            { id: 'P800004', name: 'King Arthur All-Purpose Flour 5lb', brand: 'King Arthur', availability: 'in-stock', facings: 26, images: 2, emoji: '🌾' },
            { id: 'P800005', name: 'Signature SELECT All-Purpose Flour 5lb', brand: 'Signature SELECT', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🌾' },

            // Flour - Bread
            { id: 'P800006', name: 'Gold Medal Bread Flour 5lb', brand: 'Gold Medal', availability: 'in-stock', facings: 24, images: 2, emoji: '🌾' },
            { id: 'P800007', name: 'King Arthur Bread Flour 5lb', brand: 'King Arthur', availability: 'in-stock', facings: 22, images: 2, emoji: '🌾' },
            { id: 'P800008', name: 'Pillsbury Best Bread Flour 5lb', brand: 'Pillsbury', availability: 'in-stock', facings: 20, images: 2, emoji: '🌾' },

            // Flour - Cake & Specialty
            { id: 'P800009', name: 'Swans Down Cake Flour 32oz', brand: 'Swans Down', availability: 'in-stock', facings: 22, images: 2, emoji: '🌾' },
            { id: 'P800010', name: 'Softasilk Cake Flour 32oz', brand: 'Softasilk', availability: 'in-stock', facings: 18, images: 2, emoji: '🌾' },
            { id: 'P800011', name: 'Gold Medal Self-Rising Flour 5lb', brand: 'Gold Medal', availability: 'in-stock', facings: 24, images: 2, emoji: '🌾' },
            { id: 'P800012', name: 'Gold Medal Whole Wheat Flour 5lb', brand: 'Gold Medal', availability: 'in-stock', facings: 20, images: 2, emoji: '🌾' },
            { id: 'P800013', name: 'Bob\'s Red Mill Organic All-Purpose Flour', brand: 'Bob\'s Red Mill', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🌾' },
            { id: 'P800014', name: 'Bob\'s Red Mill Almond Flour 16oz', brand: 'Bob\'s Red Mill', availability: 'in-stock', facings: 16, images: 2, emoji: '🥜' },

            // Sugar - Granulated
            { id: 'P800015', name: 'Domino Granulated Sugar 4lb', brand: 'Domino', availability: 'in-stock', facings: 36, images: 3, emoji: '🍬' },
            { id: 'P800016', name: 'Domino Granulated Sugar 10lb', brand: 'Domino', availability: 'in-stock', facings: 30, images: 2, emoji: '🍬' },
            { id: 'P800017', name: 'C&H Pure Cane Sugar 4lb', brand: 'C&H', availability: 'in-stock', facings: 32, images: 3, emoji: '🍬' },
            { id: 'P800018', name: 'Signature SELECT Granulated Sugar 4lb', brand: 'Signature SELECT', availability: 'in-stock', facings: 28, images: 2, emoji: '🍬' },

            // Sugar - Brown
            { id: 'P800019', name: 'Domino Light Brown Sugar 2lb', brand: 'Domino', availability: 'in-stock', facings: 30, images: 3, emoji: '🍬' },
            { id: 'P800020', name: 'Domino Dark Brown Sugar 2lb', brand: 'Domino', availability: 'in-stock', facings: 26, images: 2, emoji: '🍬' },
            { id: 'P800021', name: 'C&H Light Brown Sugar 2lb', brand: 'C&H', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🍬' },
            { id: 'P800022', name: 'C&H Dark Brown Sugar 2lb', brand: 'C&H', availability: 'in-stock', facings: 22, images: 2, emoji: '🍬' },

            // Sugar - Powdered
            { id: 'P800023', name: 'Domino Powdered Sugar 2lb', brand: 'Domino', availability: 'in-stock', facings: 32, images: 3, emoji: '🍬' },
            { id: 'P800024', name: 'C&H Powdered Sugar 2lb', brand: 'C&H', availability: 'in-stock', facings: 28, images: 2, emoji: '🍬' },
            { id: 'P800025', name: 'Signature SELECT Powdered Sugar 2lb', brand: 'Signature SELECT', availability: 'in-stock', facings: 24, images: 2, emoji: '🍬' },

            // Chocolate Chips - Semi-Sweet
            { id: 'P800026', name: 'Nestlé Toll House Semi-Sweet Chips 12oz', brand: 'Nestlé', availability: 'in-stock', facings: 36, images: 3, emoji: '🍫' },
            { id: 'P800027', name: 'Nestlé Toll House Semi-Sweet Chips 24oz', brand: 'Nestlé', availability: 'in-stock', facings: 32, images: 3, emoji: '🍫' },
            { id: 'P800028', name: 'Ghirardelli Semi-Sweet Chips 12oz', brand: 'Ghirardelli', availability: 'in-stock', facings: 28, images: 2, emoji: '🍫' },
            { id: 'P800029', name: 'Hershey\'s Semi-Sweet Chips 12oz', brand: 'Hershey\'s', availability: 'in-stock', facings: 26, images: 2, emoji: '🍫' },
            { id: 'P800030', name: 'Guittard Semi-Sweet Chips 12oz', brand: 'Guittard', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🍫' },

            // Chocolate Chips - Milk Chocolate
            { id: 'P800031', name: 'Nestlé Toll House Milk Chocolate Chips 11.5oz', brand: 'Nestlé', availability: 'in-stock', facings: 30, images: 3, emoji: '🍫' },
            { id: 'P800032', name: 'Hershey\'s Milk Chocolate Chips 11.5oz', brand: 'Hershey\'s', availability: 'in-stock', facings: 26, images: 2, emoji: '🍫' },
            { id: 'P800033', name: 'Ghirardelli Milk Chocolate Chips 11.5oz', brand: 'Ghirardelli', availability: 'in-stock', facings: 24, images: 2, emoji: '🍫' },

            // Chocolate Chips - Specialty
            { id: 'P800034', name: 'Nestlé Toll House Dark Chocolate Chips 10oz', brand: 'Nestlé', availability: 'in-stock', facings: 24, images: 2, emoji: '🍫' },
            { id: 'P800035', name: 'Nestlé Toll House White Chips 12oz', brand: 'Nestlé', availability: 'in-stock', facings: 28, images: 2, emoji: '🤍' },
            { id: 'P800036', name: 'Ghirardelli 60% Cacao Chips 10oz', brand: 'Ghirardelli', availability: 'in-stock', facings: 20, images: 2, emoji: '🍫' },
            { id: 'P800037', name: 'Lily\'s Dark Chocolate Chips 9oz', brand: 'Lily\'s', availability: 'in-stock', facings: 18, images: 2, emoji: '🍫' },
            { id: 'P800038', name: 'Enjoy Life Mini Chips 10oz', brand: 'Enjoy Life', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🍫' },

            // Baking Chocolate Bars
            { id: 'P800039', name: 'Baker\'s Unsweetened Chocolate 4oz', brand: 'Baker\'s', availability: 'in-stock', facings: 24, images: 2, emoji: '🍫' },
            { id: 'P800040', name: 'Baker\'s Semi-Sweet Chocolate 4oz', brand: 'Baker\'s', availability: 'in-stock', facings: 22, images: 2, emoji: '🍫' },
            { id: 'P800041', name: 'Ghirardelli Bittersweet Baking Bar 4oz', brand: 'Ghirardelli', availability: 'in-stock', facings: 18, images: 2, emoji: '🍫' },
            { id: 'P800042', name: 'Baker\'s German Sweet Chocolate 4oz', brand: 'Baker\'s', availability: 'in-stock', facings: 16, images: 2, emoji: '🍫' },

            // Cocoa Powder
            { id: 'P800043', name: 'Hershey\'s Cocoa Natural Unsweetened 8oz', brand: 'Hershey\'s', availability: 'in-stock', facings: 28, images: 3, emoji: '🍫' },
            { id: 'P800044', name: 'Hershey\'s Special Dark Cocoa 8oz', brand: 'Hershey\'s', availability: 'in-stock', facings: 24, images: 2, emoji: '🍫' },
            { id: 'P800045', name: 'Ghirardelli Cocoa Unsweetened 8oz', brand: 'Ghirardelli', availability: 'in-stock', facings: 20, images: 2, emoji: '🍫' },
            { id: 'P800046', name: 'Signature SELECT Cocoa Powder 8oz', brand: 'Signature SELECT', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🍫' },

            // Extracts - Vanilla
            { id: 'P800047', name: 'McCormick Pure Vanilla Extract 2oz', brand: 'McCormick', availability: 'in-stock', facings: 32, images: 3, emoji: '🧪' },
            { id: 'P800048', name: 'McCormick Pure Vanilla Extract 4oz', brand: 'McCormick', availability: 'in-stock', facings: 28, images: 2, emoji: '🧪' },
            { id: 'P800049', name: 'Nielsen-Massey Madagascar Vanilla 2oz', brand: 'Nielsen-Massey', availability: 'in-stock', facings: 20, images: 2, emoji: '🧪' },
            { id: 'P800050', name: 'Signature SELECT Imitation Vanilla 8oz', brand: 'Signature SELECT', availability: 'in-stock', facings: 24, images: 2, emoji: '🧪' },

            // Extracts - Other Flavors
            { id: 'P800051', name: 'McCormick Pure Almond Extract 2oz', brand: 'McCormick', availability: 'in-stock', facings: 20, images: 2, emoji: '🧪' },
            { id: 'P800052', name: 'McCormick Imitation Butter Flavor 2oz', brand: 'McCormick', availability: 'in-stock', facings: 16, images: 2, emoji: '🧪' },
            { id: 'P800053', name: 'McCormick Pure Lemon Extract 1oz', brand: 'McCormick', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🧪' },
            { id: 'P800054', name: 'McCormick Pure Peppermint Extract 1oz', brand: 'McCormick', availability: 'in-stock', facings: 14, images: 2, emoji: '🧪' },

            // Baking Powder & Baking Soda
            { id: 'P800055', name: 'Clabber Girl Baking Powder 8.1oz', brand: 'Clabber Girl', availability: 'in-stock', facings: 26, images: 2, emoji: '🥫' },
            { id: 'P800056', name: 'Calumet Baking Powder 7oz', brand: 'Calumet', availability: 'in-stock', facings: 22, images: 2, emoji: '🥫' },
            { id: 'P800057', name: 'Arm & Hammer Baking Soda 1lb', brand: 'Arm & Hammer', availability: 'in-stock', facings: 30, images: 3, emoji: '📦' },
            { id: 'P800058', name: 'Arm & Hammer Baking Soda 4lb', brand: 'Arm & Hammer', availability: 'in-stock', facings: 24, images: 2, emoji: '📦' },

            // Yeast
            { id: 'P800059', name: 'Fleischmann\'s Active Dry Yeast 3pk', brand: 'Fleischmann\'s', availability: 'in-stock', facings: 24, images: 2, emoji: '🦠' },
            { id: 'P800060', name: 'Fleischmann\'s Instant Yeast 3pk', brand: 'Fleischmann\'s', availability: 'in-stock', facings: 20, images: 2, emoji: '🦠' },
            { id: 'P800061', name: 'Red Star Active Dry Yeast 3pk', brand: 'Red Star', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🦠' },
            { id: 'P800062', name: 'SAF Instant Yeast 4oz', brand: 'SAF', availability: 'in-stock', facings: 16, images: 2, emoji: '🦠' },

            // Oils
            { id: 'P800063', name: 'Crisco Vegetable Oil 48oz', brand: 'Crisco', availability: 'in-stock', facings: 28, images: 3, emoji: '🫗' },
            { id: 'P800064', name: 'Wesson Vegetable Oil 48oz', brand: 'Wesson', availability: 'in-stock', facings: 24, images: 2, emoji: '🫗' },
            { id: 'P800065', name: 'Mazola Corn Oil 40oz', brand: 'Mazola', availability: 'in-stock', facings: 20, images: 2, emoji: '🫗' },
            { id: 'P800066', name: 'Canola Oil 48oz', brand: 'Signature SELECT', availability: 'in-stock', facings: 26, images: 2, emoji: '🫗' },
            { id: 'P800067', name: 'Crisco Pure Canola Oil 48oz', brand: 'Crisco', availability: 'in-stock', facings: 22, images: 2, emoji: '🫗' },

            // Shortening
            { id: 'P800068', name: 'Crisco All-Vegetable Shortening 48oz', brand: 'Crisco', availability: 'in-stock', facings: 24, images: 2, emoji: '🥫' },
            { id: 'P800069', name: 'Crisco Butter Flavor Shortening 48oz', brand: 'Crisco', availability: 'in-stock', facings: 18, images: 2, emoji: '🥫' },
            { id: 'P800070', name: 'Spectrum Organic Shortening 24oz', brand: 'Spectrum', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🥫' },

            // Cooking Spray
            { id: 'P800071', name: 'PAM Original Cooking Spray 6oz', brand: 'PAM', availability: 'in-stock', facings: 28, images: 3, emoji: '🥫' },
            { id: 'P800072', name: 'PAM Baking Spray 5oz', brand: 'PAM', availability: 'in-stock', facings: 24, images: 2, emoji: '🥫' },
            { id: 'P800073', name: 'Baker\'s Joy Non-Stick Spray 5oz', brand: 'Baker\'s Joy', availability: 'in-stock', facings: 20, images: 2, emoji: '🥫' },

            // Cake Mixes - Chocolate
            { id: 'P800074', name: 'Betty Crocker Devil\'s Food Cake Mix', brand: 'Betty Crocker', availability: 'in-stock', facings: 32, images: 3, emoji: '🎂' },
            { id: 'P800075', name: 'Duncan Hines Dark Chocolate Fudge Cake Mix', brand: 'Duncan Hines', availability: 'in-stock', facings: 28, images: 2, emoji: '🎂' },
            { id: 'P800076', name: 'Pillsbury Chocolate Fudge Cake Mix', brand: 'Pillsbury', availability: 'in-stock', facings: 26, images: 2, emoji: '🎂' },
            { id: 'P800077', name: 'Signature SELECT Devil\'s Food Cake Mix', brand: 'Signature SELECT', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🎂' },

            // Cake Mixes - Yellow/White
            { id: 'P800078', name: 'Betty Crocker Super Moist Yellow Cake Mix', brand: 'Betty Crocker', availability: 'in-stock', facings: 30, images: 3, emoji: '🎂' },
            { id: 'P800079', name: 'Betty Crocker Super Moist White Cake Mix', brand: 'Betty Crocker', availability: 'in-stock', facings: 28, images: 2, emoji: '🎂' },
            { id: 'P800080', name: 'Duncan Hines Classic Yellow Cake Mix', brand: 'Duncan Hines', availability: 'in-stock', facings: 26, images: 2, emoji: '🎂' },
            { id: 'P800081', name: 'Pillsbury Moist Supreme Classic White', brand: 'Pillsbury', availability: 'in-stock', facings: 24, images: 2, emoji: '🎂' },

            // Cake Mixes - Specialty
            { id: 'P800082', name: 'Betty Crocker Carrot Cake Mix', brand: 'Betty Crocker', availability: 'in-stock', facings: 22, images: 2, emoji: '🥕' },
            { id: 'P800083', name: 'Duncan Hines Red Velvet Cake Mix', brand: 'Duncan Hines', availability: 'in-stock', facings: 24, images: 2, emoji: '🎂' },
            { id: 'P800084', name: 'Betty Crocker Lemon Cake Mix', brand: 'Betty Crocker', availability: 'in-stock', facings: 20, images: 2, emoji: '🍋' },
            { id: 'P800085', name: 'Duncan Hines Spice Cake Mix', brand: 'Duncan Hines', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🎂' },
            { id: 'P800086', name: 'Pillsbury Funfetti Cake Mix', brand: 'Pillsbury', availability: 'in-stock', facings: 26, images: 3, emoji: '🎉' },

            // Brownie Mixes
            { id: 'P800087', name: 'Ghirardelli Double Chocolate Brownie Mix', brand: 'Ghirardelli', availability: 'in-stock', facings: 32, images: 3, emoji: '🍫' },
            { id: 'P800088', name: 'Betty Crocker Fudge Brownie Mix', brand: 'Betty Crocker', availability: 'in-stock', facings: 30, images: 3, emoji: '🍫' },
            { id: 'P800089', name: 'Duncan Hines Chewy Fudge Brownie Mix', brand: 'Duncan Hines', availability: 'in-stock', facings: 28, images: 2, emoji: '🍫' },
            { id: 'P800090', name: 'Pillsbury Chocolate Fudge Brownie Mix', brand: 'Pillsbury', availability: 'in-stock', facings: 26, images: 2, emoji: '🍫' },
            { id: 'P800091', name: 'Ghirardelli Triple Chocolate Brownie Mix', brand: 'Ghirardelli', availability: 'in-stock', facings: 24, images: 2, emoji: '🍫' },

            // Cookie Mixes
            { id: 'P800092', name: 'Betty Crocker Chocolate Chip Cookie Mix', brand: 'Betty Crocker', availability: 'in-stock', facings: 26, images: 2, emoji: '🍪' },
            { id: 'P800093', name: 'Duncan Hines Chocolate Chip Cookie Mix', brand: 'Duncan Hines', availability: 'in-stock', facings: 22, images: 2, emoji: '🍪' },
            { id: 'P800094', name: 'Betty Crocker Sugar Cookie Mix', brand: 'Betty Crocker', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🍪' },
            { id: 'P800095', name: 'Krusteaz Snickerdoodle Cookie Mix', brand: 'Krusteaz', availability: 'in-stock', facings: 18, images: 2, emoji: '🍪' },

            // Muffin Mixes (additional)
            { id: 'P800096', name: 'Betty Crocker Blueberry Muffin Mix', brand: 'Betty Crocker', availability: 'in-stock', facings: 24, images: 2, emoji: '🧁' },
            { id: 'P800097', name: 'Duncan Hines Blueberry Muffin Mix', brand: 'Duncan Hines', availability: 'in-stock', facings: 20, images: 2, emoji: '🧁' },
            { id: 'P800098', name: 'Martha White Blueberry Muffin Mix', brand: 'Martha White', availability: 'in-stock', facings: 18, images: 2, emoji: '🧁' },

            // Frosting - Chocolate
            { id: 'P800099', name: 'Betty Crocker Rich & Creamy Chocolate Frosting', brand: 'Betty Crocker', availability: 'in-stock', facings: 32, images: 3, emoji: '🍫' },
            { id: 'P800100', name: 'Duncan Hines Creamy Home-Style Chocolate', brand: 'Duncan Hines', availability: 'in-stock', facings: 28, images: 2, emoji: '🍫' },
            { id: 'P800101', name: 'Pillsbury Chocolate Fudge Frosting', brand: 'Pillsbury', availability: 'in-stock', facings: 26, images: 2, emoji: '🍫' },

            // Frosting - Vanilla & Other
            { id: 'P800102', name: 'Betty Crocker Rich & Creamy Vanilla Frosting', brand: 'Betty Crocker', availability: 'in-stock', facings: 30, images: 3, emoji: '🤍' },
            { id: 'P800103', name: 'Duncan Hines Creamy Home-Style Vanilla', brand: 'Duncan Hines', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🤍' },
            { id: 'P800104', name: 'Pillsbury Cream Cheese Frosting', brand: 'Pillsbury', availability: 'in-stock', facings: 24, images: 2, emoji: '🧀' },
            { id: 'P800105', name: 'Betty Crocker Whipped Fluffy White', brand: 'Betty Crocker', availability: 'in-stock', facings: 22, images: 2, emoji: '🤍' },
            { id: 'P800106', name: 'Duncan Hines Strawberry Cream Frosting', brand: 'Duncan Hines', availability: 'in-stock', facings: 18, images: 2, emoji: '🍓' },

            // Decorating Supplies - Sprinkles
            { id: 'P800107', name: 'Betty Crocker Rainbow Sprinkles', brand: 'Betty Crocker', availability: 'in-stock', facings: 24, images: 2, emoji: '🌈' },
            { id: 'P800108', name: 'Wilton Rainbow Nonpareils', brand: 'Wilton', availability: 'in-stock', facings: 20, images: 2, emoji: '🌈' },
            { id: 'P800109', name: 'Signature SELECT Chocolate Sprinkles', brand: 'Signature SELECT', availability: 'in-stock', facings: 18, images: 2, emoji: '🍫' },

            // Decorating Supplies - Food Coloring
            { id: 'P800110', name: 'McCormick Assorted Food Colors', brand: 'McCormick', availability: 'in-stock', facings: 22, images: 2, emoji: '🎨' },
            { id: 'P800111', name: 'Wilton Icing Colors 8-Set', brand: 'Wilton', availability: 'in-stock', facings: 18, images: 2, emoji: '🎨' },
            { id: 'P800112', name: 'AmeriColor Soft Gel Paste 4-Pack', brand: 'AmeriColor', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🎨' },

            // Decorating Supplies - Piping & Tips
            { id: 'P800113', name: 'Wilton Decorating Tip Set 12pc', brand: 'Wilton', availability: 'in-stock', facings: 16, images: 2, emoji: '🎂' },
            { id: 'P800114', name: 'Wilton Disposable Decorating Bags 12"', brand: 'Wilton', availability: 'in-stock', facings: 20, images: 2, emoji: '🎂' },

            // Pie Crust & Pie Filling
            { id: 'P800115', name: 'Pillsbury Refrigerated Pie Crusts 2pk', brand: 'Pillsbury', availability: 'in-stock', facings: 28, images: 3, emoji: '🥧' },
            { id: 'P800116', name: 'Marie Callender\'s Frozen Pie Shells 2pk', brand: 'Marie Callender\'s', availability: 'in-stock', facings: 22, images: 2, emoji: '🥧' },
            { id: 'P800117', name: 'Comstock Apple Pie Filling 21oz', brand: 'Comstock', availability: 'in-stock', facings: 24, images: 2, emoji: '🍎' },
            { id: 'P800118', name: 'Comstock Cherry Pie Filling 21oz', brand: 'Comstock', availability: 'in-stock', facings: 20, images: 2, emoji: '🍒' },
            { id: 'P800119', name: 'Duncan Hines Wilderness Blueberry Filling', brand: 'Duncan Hines', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🫐' },

            // Nuts for Baking
            { id: 'P800120', name: 'Fisher Pecans Halves & Pieces 8oz', brand: 'Fisher', availability: 'in-stock', facings: 22, images: 2, emoji: '🥜' },
            { id: 'P800121', name: 'Fisher Walnuts Halves & Pieces 8oz', brand: 'Fisher', availability: 'in-stock', facings: 20, images: 2, emoji: '🥜' },
            { id: 'P800122', name: 'Fisher Sliced Almonds 6oz', brand: 'Fisher', availability: 'in-stock', facings: 18, images: 2, emoji: '🥜' },
            { id: 'P800123', name: 'Signature SELECT Pecan Pieces 6oz', brand: 'Signature SELECT', availability: 'in-stock', facings: 16, images: 2, emoji: '🥜' },
            { id: 'P800124', name: 'Blue Diamond Slivered Almonds 6oz', brand: 'Blue Diamond', availability: 'in-stock', facings: 14, images: 2, emoji: '🥜' },

            // Dried Fruit
            { id: 'P800125', name: 'Sun-Maid Raisins 12oz', brand: 'Sun-Maid', availability: 'in-stock', facings: 24, images: 2, emoji: '🍇' },
            { id: 'P800126', name: 'Ocean Spray Dried Cranberries 6oz', brand: 'Ocean Spray', availability: 'in-stock', facings: 20, images: 2, emoji: '🍒' },
            { id: 'P800127', name: 'Mariani Diced Dates 8oz', brand: 'Mariani', availability: 'out-of-stock', facings: 0, images: 1, emoji: '📅' },

            // Sweetened Condensed & Evaporated Milk
            { id: 'P800128', name: 'Eagle Brand Sweetened Condensed Milk 14oz', brand: 'Eagle Brand', availability: 'in-stock', facings: 28, images: 3, emoji: '🥫' },
            { id: 'P800129', name: 'Carnation Evaporated Milk 12oz', brand: 'Carnation', availability: 'in-stock', facings: 26, images: 2, emoji: '🥫' },
            { id: 'P800130', name: 'Signature SELECT Sweetened Condensed Milk', brand: 'Signature SELECT', availability: 'in-stock', facings: 22, images: 2, emoji: '🥫' },

            // Gelatin & Pudding Mix
            { id: 'P800131', name: 'Jell-O Strawberry Gelatin 3oz', brand: 'Jell-O', availability: 'in-stock', facings: 26, images: 2, emoji: '🍓' },
            { id: 'P800132', name: 'Jell-O Cherry Gelatin 3oz', brand: 'Jell-O', availability: 'in-stock', facings: 24, images: 2, emoji: '🍒' },
            { id: 'P800133', name: 'Jell-O Lime Gelatin 3oz', brand: 'Jell-O', availability: 'in-stock', facings: 20, images: 2, emoji: '🍋' },
            { id: 'P800134', name: 'Jell-O Vanilla Instant Pudding 3.4oz', brand: 'Jell-O', availability: 'in-stock', facings: 24, images: 2, emoji: '🍮' },
            { id: 'P800135', name: 'Jell-O Chocolate Instant Pudding 3.9oz', brand: 'Jell-O', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🍮' },

            // Corn Syrup & Molasses
            { id: 'P800136', name: 'Karo Light Corn Syrup 16oz', brand: 'Karo', availability: 'in-stock', facings: 22, images: 2, emoji: '🍯' },
            { id: 'P800137', name: 'Karo Dark Corn Syrup 16oz', brand: 'Karo', availability: 'in-stock', facings: 18, images: 2, emoji: '🍯' },
            { id: 'P800138', name: 'Grandma\'s Original Molasses 12oz', brand: 'Grandma\'s', availability: 'in-stock', facings: 16, images: 2, emoji: '🍯' },
            { id: 'P800139', name: 'Blackstrap Molasses 15oz', brand: 'Brer Rabbit', availability: 'in-stock', facings: 12, images: 2, emoji: '🍯' },

            // Honey
            { id: 'P800140', name: 'Sue Bee Clover Honey 12oz', brand: 'Sue Bee', availability: 'in-stock', facings: 24, images: 2, emoji: '🍯' },
            { id: 'P800141', name: 'Nature Nate\'s Raw & Unfiltered Honey 16oz', brand: 'Nature Nate\'s', availability: 'in-stock', facings: 20, images: 2, emoji: '🍯' },
            { id: 'P800142', name: 'Signature SELECT Pure Honey 12oz', brand: 'Signature SELECT', availability: 'in-stock', facings: 18, images: 2, emoji: '🍯' },

            // Peanut Butter & Nut Butters (for baking)
            { id: 'P800143', name: 'Jif Extra Crunchy Peanut Butter 16oz', brand: 'Jif', availability: 'in-stock', facings: 28, images: 3, emoji: '🥜' },
            { id: 'P800144', name: 'Skippy Natural Creamy 15oz', brand: 'Skippy', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🥜' },
            { id: 'P800145', name: 'Justin\'s Almond Butter Classic 16oz', brand: 'Justin\'s', availability: 'in-stock', facings: 16, images: 2, emoji: '🥜' },

            // Coconut Products
            { id: 'P800146', name: 'Baker\'s Angel Flake Coconut 14oz', brand: 'Baker\'s', availability: 'in-stock', facings: 22, images: 2, emoji: '🥥' },
            { id: 'P800147', name: 'Signature SELECT Sweetened Coconut 14oz', brand: 'Signature SELECT', availability: 'in-stock', facings: 18, images: 2, emoji: '🥥' },
            { id: 'P800148', name: 'Let\'s Do Organic Shredded Coconut', brand: 'Let\'s Do Organic', availability: 'in-stock', facings: 14, images: 2, emoji: '🥥' },

            // Tapioca & Cornstarch
            { id: 'P800149', name: 'Minute Tapioca 8oz', brand: 'Minute', availability: 'in-stock', facings: 18, images: 2, emoji: '📦' },
            { id: 'P800150', name: 'Argo Corn Starch 16oz', brand: 'Argo', availability: 'in-stock', facings: 22, images: 2, emoji: '📦' },
            { id: 'P800151', name: 'Kingsford\'s Corn Starch 16oz', brand: 'Kingsford\'s', availability: 'in-stock', facings: 18, images: 2, emoji: '📦' },

            // Specialty Baking Items
            { id: 'P800152', name: 'Cream of Tartar 1.5oz', brand: 'McCormick', availability: 'in-stock', facings: 16, images: 2, emoji: '🥫' },
            { id: 'P800153', name: 'Meringue Powder 4oz', brand: 'Wilton', availability: 'out-of-stock', facings: 0, images: 1, emoji: '🥫' },
            { id: 'P800154', name: 'Almond Paste 7oz', brand: 'Odense', availability: 'in-stock', facings: 12, images: 2, emoji: '🥜' },
            { id: 'P800155', name: 'Marzipan 7oz', brand: 'Odense', availability: 'in-stock', facings: 10, images: 2, emoji: '🥜' },

            // Additional Items
            { id: 'P800156', name: 'Duncan Hines Mug Cakes Chocolate 4pk', brand: 'Duncan Hines', availability: 'in-stock', facings: 20, images: 2, emoji: '☕' },
            { id: 'P800157', name: 'Betty Crocker Cookie Icing Red', brand: 'Betty Crocker', availability: 'in-stock', facings: 16, images: 2, emoji: '🎨' },
            { id: 'P800158', name: 'Wilton Candy Melts Chocolate 12oz', brand: 'Wilton', availability: 'in-stock', facings: 18, images: 2, emoji: '🍫' }
        ]
    }
};

let currentScan = null;
let filteredProducts = [];

// Get scan ID from URL
function getScanIdFromURL() {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get('id'));
}

// Format date for display
function formatDateTime(date) {
    const options = {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    };
    return date.toLocaleString('en-US', options);
}

// Calculate Share of Shelf by brand
function calculateShareOfShelf(products) {
    const brandCounts = {};
    let totalFacings = 0;

    products.forEach(product => {
        if (product.availability === 'in-stock') {
            brandCounts[product.brand] = (brandCounts[product.brand] || 0) + product.facings;
            totalFacings += product.facings;
        }
    });

    const brandShares = Object.entries(brandCounts).map(([brand, facings]) => ({
        brand,
        facings,
        percentage: totalFacings > 0 ? ((facings / totalFacings) * 100).toFixed(1) : 0
    }));

    // Sort by percentage descending
    brandShares.sort((a, b) => b.percentage - a.percentage);

    return { brandShares, totalFacings };
}

// Render Share of Shelf summary (P2)
function renderShareOfShelf(products) {
    const uniqueProducts = products.length;
    const uniqueBrands = [...new Set(products.map(p => p.brand))].length;

    document.getElementById('totalProducts').textContent = uniqueProducts;
    document.getElementById('totalBrands').textContent = uniqueBrands;

    const { brandShares } = calculateShareOfShelf(products);
    const brandBreakdown = document.getElementById('brandBreakdown');

    brandBreakdown.innerHTML = brandShares.map(({ brand, percentage }) => `
        <div class="brand-item">
            <div class="brand-name">${brand}</div>
            <div class="brand-bar-container">
                <div class="brand-bar" style="width: ${percentage}%">
                    <span class="brand-percentage">${percentage}%</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Populate brand filter
function populateBrandFilter(products) {
    const brands = [...new Set(products.map(p => p.brand))].sort();
    const brandFilter = document.getElementById('brandFilter');

    brands.forEach(brand => {
        const option = document.createElement('option');
        option.value = brand;
        option.textContent = brand;
        brandFilter.appendChild(option);
    });
}

// Render products table
function renderProducts(products) {
    const tbody = document.getElementById('productsTableBody');
    const noResults = document.getElementById('noResults');

    if (products.length === 0) {
        tbody.innerHTML = '';
        noResults.style.display = 'block';
        return;
    }

    noResults.style.display = 'none';
    tbody.innerHTML = products.map(product => `
        <tr>
            <td>
                <div class="product-cell">
                    <div class="product-image">
                        <span class="product-placeholder">${product.emoji || '📦'}</span>
                    </div>
                    <div class="product-info">
                        <div class="product-name">${product.name}</div>
                        <div class="product-id">${product.id}</div>
                    </div>
                </div>
            </td>
            <td>
                <span class="status-badge status-${product.availability}">
                    ${product.availability === 'in-stock' ? 'In Stock' : 'Out of Stock'}
                </span>
            </td>
            <td>
                <span class="facings-count">${product.facings}</span>
            </td>
            <td>
                <a href="#" class="view-images-link" onclick="openImageModal('${product.id}', '${product.name}', ${product.images}); return false;">
                    View Images →
                </a>
            </td>
        </tr>
    `).join('');
}

// Apply filters
function applyFilters() {
    const brandFilter = document.getElementById('brandFilter').value;
    const availabilityFilter = document.getElementById('availabilityFilter').value;

    filteredProducts = currentScan.products.filter(product => {
        const matchesBrand = !brandFilter || product.brand === brandFilter;
        const matchesAvailability = !availabilityFilter || product.availability === availabilityFilter;

        return matchesBrand && matchesAvailability;
    });

    renderProducts(filteredProducts);
}

// Clear filters
function clearFilters() {
    document.getElementById('brandFilter').value = '';
    document.getElementById('availabilityFilter').value = '';
    filteredProducts = [...currentScan.products];
    renderProducts(filteredProducts);
}

// Open image modal
function openImageModal(productId, productName, imageCount) {
    const modal = document.getElementById('imageModal');
    const modalProductName = document.getElementById('modalProductName');
    const modalImages = document.getElementById('modalImages');

    modalProductName.textContent = productName;

    // Generate placeholder images
    modalImages.innerHTML = Array.from({ length: imageCount }, (_, i) => `
        <div class="modal-image">
            <div class="image-placeholder">
                <div style="font-size: 48px; margin-bottom: 8px;">📸</div>
                <div>Image ${i + 1}</div>
                <div style="font-size: 12px; color: #999; margin-top: 4px;">${productId}</div>
            </div>
        </div>
    `).join('');

    modal.style.display = 'flex';
}

// Close modal
function closeModal() {
    document.getElementById('imageModal').style.display = 'none';
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    const scanId = getScanIdFromURL();
    currentScan = mockScanDetails[scanId];

    if (!currentScan) {
        alert('Scan not found');
        window.location.href = 'index.html';
        return;
    }

    // Update header
    document.getElementById('scanTitle').textContent = `${currentScan.category} - Aisle Scan`;
    document.getElementById('scanSubtitle').textContent = formatDateTime(currentScan.datetime);

    // Render all data
    renderShareOfShelf(currentScan.products);
    populateBrandFilter(currentScan.products);

    filteredProducts = [...currentScan.products];
    renderProducts(filteredProducts);

    // Add event listeners
    document.getElementById('brandFilter').addEventListener('change', applyFilters);
    document.getElementById('availabilityFilter').addEventListener('change', applyFilters);
    document.getElementById('clearFilters').addEventListener('click', clearFilters);

    // Modal close listeners
    document.querySelector('.close').addEventListener('click', closeModal);
    document.getElementById('imageModal').addEventListener('click', (e) => {
        if (e.target.id === 'imageModal') {
            closeModal();
        }
    });
});

// Make functions available globally
window.openImageModal = openImageModal;
window.closeModal = closeModal;
