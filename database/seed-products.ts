interface IProduct {
  name: string;
  description: string;
  price: number;
  images: string[];
  stock: number;
  slug: string;
  tags: string[];
}

export const seedProducts: Array<IProduct> = [
  {
    name: "2021 HP 14 inch HD Laptop",
    description:
      "AMD Athlon Mobile Processor with Radeon Graphics. AMD Athlon Silver 3050U (2.3 GHz, up to 3.2 GHz). Get more done faster on a reliable laptop that can keep up with your everyday tasks.14-inch diagonal HD, SVA, anti-glare, micro-edge, WLED-backlit, (1366 x 768) Display. Gives you the space and clarity you need to get your work done. Weighs 3.24 lbs. and measures 0.8 thin Ultrathin and ultralight for maximum portability, featuring a smaller screen size.RAM is upgraded to 16GB DDR4 SDRAM for multitasking Adequate high-bandwidth RAM to smoothly run multiple applications and browser tabs all at once. 512GB solid state drive (SSD) While offering less storage space than a hard drive, a flash-based SSD has no moving parts, resulting in faster start-up times and data access, no noise, and reduced heat production and power draw on the battery.Up to 10 Hours of battery life means you can transition from morning meetings to evening entertainment without plugging in.",
    price: 700,
    images: [
      "https://m.media-amazon.com/images/I/81C7E9Fp7yL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/714K3sfx+oL._AC_SX466_.jpg",
    ],
    stock: 10,
    slug: "2021_HP_14_inch_HD_Laptop",
    tags: ["laptop", "computer", "pc"],
  },

  {
    name: "HP Newest HD Laptop Light-Weight",
    description:
      "✔【14 HD Display】14 HD(1366 x 768) Display with micro-edge bezel design, WLED-backlit, BrightView, Enjoy your entertainment with the great quality and high-definition detail of 1 million pixels /n✔【AMD Athlon Mobile Processor with Radeon Graphics】 AMD Athlon Silver 3050U (2.3 GHz, up to 3.2 GHz). This laptop is powered by AMD which gives good performance with efficiency. It can also do simple gaming thanks to its integrated AMD Radeon graphics. /n✔【Upgrade to 8GB RAM】Substantial high-bandwidth RAM to smoothly run your games and photo- and video-editing applications, as well as multiple programs and browser tabs all at once. /n【Upgrade to 64GB emmc + 256GB SSD】Speedy solid-state drive for seanless performance and reliable multitasking, allows you to store a large number of files, improving the reading speed of large files, ensuring daily use and the speed of opening large files, reduce the time of application and file loading /n✔【Activate 1 Year MS office 365 & Win10 in S mode】(About switch to regular Win10, see the detail in Product description) Activate pre-installed Office: 1.Launch any Office app > 2.Start your activation by signing in with your Microsoft account(Create a account if you don't have one yet) > 3.Click Activate Office > 4.Sign in your account and follow the next prompts. > 5.Complete Step 1,2 and 3 > 6.Click on Refresh once Office is ready > 7.Open a document and accept the license agreement",
    price: 469,
    images: [
      "https://m.media-amazon.com/images/I/81NvTUBf9ZS._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/81cWK1vPMpS._AC_SX466_.jpg",
    ],
    stock: 7,
    slug: "HP_2021_Newest_14in_HD_Laptop _Light-Weigh",
    tags: ["laptop", "computer", "pc"],
  },

  {
    name: "Logitech G502 HERO Gaming Mouse",
    description:
      "Hero 25K sensor through a software update from G HUB, this upgrade is free to all players: Our most advanced, with 1:1 tracking, 400-plus ips, and 100 - 25,600 max dpi sensitivity plus zero smoothing, filtering, or acceleration  /n11 customizable buttons and onboard memory: Assign custom commands to the buttons and save up to five ready to play profiles directly to the mouse  /nAdjustable weight system: Arrange up to five removable 3.6 grams weights inside the mouse for personalized weight and balance tuning",
    price: 38,
    images: [
      "https://m.media-amazon.com/images/I/61mpMH5TzkL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71sgEIlSvfL._AC_SX679_.jpg",
    ],

    stock: 18,
    slug: "Logitech_G502_HERO_High_Performance_Wired_Gaming_Mouse",
    tags: ["computer", "pc", "mouse", "laptop"],
  },

  {
    name: "DELUX Wired Ergonomic Gaming Mouse",
    description:
      "[Exclusive Replaceable Basic Design] Detachable basic structure design-Removeable rear basic parts, let it fit all gamer grip style. Come with Small Basic-Ambidextrous, Big Basic-Right handed, without Basic let its weight at about 69g, cuting down the rear part friction, free your movement, great for fingertip grip; with Small Basic, let it to be a Ambidextrous mouse, great for claw grip; and with Big basic, let it to be a Right handed mouse with thumb rest, great for palm grip /n[Extrordinary Advanced RGB] there are 4 zone lighting: front light/scroll whell/logo/rear light. Inspired by car light, design with a headlight which is a whole lighting face in front of the mouse and two taillight, offer you the marvelous lighting effects. And for the lighting mode shift, click the backward and scroll wheel at the same time to select the preset light effects or just turn off the light without driver",
    price: 36,
    images: [
      "https://m.media-amazon.com/images/I/51Pfq+glbqS._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/61F5snpV2pL._AC_SX466_.jpg",
    ],
    stock: 8,
    slug: "DELUX_80G_(2.82oz)_Wired_Ergonomic_Gaming_Mouse",
    tags: ["computer", "pc", "mouse", "laptop"],
  },

  {
    name: "LTC Circle RGB Gaming Mouse",
    description:
      "【Lightweight Design】With a honeycomb shell design, this LTC mouse is just 75 grams (2.65oz) in weight, very lightweight and agile to move and aim. Your hand will not feel tired even for a long time playing. Also, no worry about the dust and spill will hurt the sensor, a PCBA housing cover protects your mouse well and easy to clean. /nAdjustable DPI to 6400】Geared with 5 onboard DPI levels (800/2400/3200/4800/6400) which allows your mouse movements to be registered to pinpoint accuracy. Each of the 5 DPI levels is easily customizable via software, enabling you to switch to your DPI settings on the fly.",
    price: 25,
    images: [
      "https://m.media-amazon.com/images/I/61eFTTJ+HBL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/71MBSFzNoPL._AC_SX466_.jpg",
    ],
    stock: 22,
    slug: "LTC_Circle_Pit_HM-001_RGB_Gaming_Mouse",
    tags: ["computer", "pc", "mouse", "laptop"],
  },

  {
    name: "Noble 5 Liftoff Gaming Mouse",
    description:
      "Top of the Line Sensor -- Ultra accurate E-sports standard 12,000 DPI PixArt PMW3360 sensor to offer you the highest precision, speed, and control. No spinouts. No overcompensating. Just perfect tracking. /nAdjustable -- Easy to adjust to your sensitivity comfort zone: adjustable polling rate at the push of a button from 125Hz / 250Hz / 500Hz/ 1000Hz for a lightspeed 1ms report rate. Dedicated DPI buttons to control your speed with on-the-fly sensitivity adjustment for gaming or the office.",
    price: 30,
    images: [
      "https://m.media-amazon.com/images/I/616bcypjHCL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/61iQKeTVdML._AC_SY741_.jpg",
    ],

    stock: 5,
    slug: "Noble_5_Liftoff_Gaming_Mouse",
    tags: ["computer", "pc", "mouse", "laptop"],
  },

  {
    name: "CYBERPOWERPC Gaming PC",
    description:
      "System: AMD Ryzen 7 3800X 3.9GHz 8-Core | AMD B550 Chipset | 16GB DDR4 | 1TB PCI-E NVMe SSD | Genuine Windows 11 Home 64-bit  /nGraphics: NVIDIA GeForce RTX 3060 12GB Video Card | 1x HDMI | 2x DisplayPort  /nConnectivity: 6 x USB 3.1 | 2 x USB 2.0 | 1x RJ-45 Network Ethernet 10/100/1000 | 802.11AC Wi-Fi | Audio: 7.1 Channel | Keyboard and mouse  /nSpecial feature: Liquid Cooling | Tempered glass side case panel | Custom RGB case lighting | USB Gaming Keyboard | RGB 7 colors gaming mouse",
    price: 1510,
    images: [
      "https://m.media-amazon.com/images/I/818SNa1ruZL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/915laS+ZbEL._AC_SX466_.jpg",
    ],
    stock: 3,
    slug: "CYBERPOWERPC_Gamer_Supreme_Liquid_Cool_Gaming_PC",
    tags: ["laptop", "computer", "pc", "gaming", "gamer"],
  },

  {
    name: "Gaming Keyboard and Mouse and Mouse",
    description:
      "Gaming Mouse and Keyboard and around the Head Gaming Headset and Mouse Mat Complete Starter pack all in one great Gift box (This Bundle includes FOUR items) /nPC Gaming, PS4 Gaming, Xbox Gaming, Retro Pie Gaming or can be used for normal day to day Computing   /nRGB lights for ultimate PC Gaming Experience",
    price: 45,
    images: [
      "https://i.ebayimg.com/images/g/PhoAAOSwq1NeVEPM/s-l1600.jpg",
      "https://i.ebayimg.com/images/g/mz4AAOSwheBeTddK/s-l1600.jpg",
    ],

    stock: 12,
    slug: "Gaming_Keyboard_and_Mouse_and_Mouse_pad_and_Gaming_Headset",
    tags: ["laptop", "computer", "pc", "gaming", "gamer", "keyboard", "mouse"],
  },
  {
    name: "Xtreme Gaming Desktop Computer",
    description:
      "Gamer Xtreme Gaming Desktop Computer - USB Gaming Keyboard - 7 Colors RGB Gaming Mouse - Driver Discs - Power Cord - CyberPowerPC 1 Year Limited Warranty  /nSystem: Intel Core i7-10700 2.9GHz 8-Core | Intel B460 Chipset  /n16GB DDR4 | 240GB SSD | 2TB HDD /nGenuine Windows 10 Home 64-bit  /nGraphics NVIDIA GeForce GTX 1660 SUPER 6GB Video Card | 1x HDMI | 1x DisplayPort",
    price: 1999,
    images: [
      "https://m.media-amazon.com/images/I/61aSvBuJJ-L._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/71OoV+eGT4L._AC_SX466_.jpg",
    ],

    stock: 2,
    slug: "CyberpowerPC_Gamer_Xtreme_Gaming_Desktop_Computer",
    tags: ["laptop", "computer", "pc", "gaming", "gamer", "keyboard", "mouse"],
  },
];
