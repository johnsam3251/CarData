const Cars = [
  {
    color: "Silver",
    engine: "2.0L 4-cylinder",
    features: ["Bluetooth", "Backup Camera", "Keyless Entry"],
    fuelType: "Gasoline",
    horsepower: 169,
    id: 1,
    image:
      "vehicle-images.dealerinspire.com/stock-images/chrome/d1d464461b8cf4f582a6ea31c584cd1c.png",
    maker: "Toyota",
    mileage: 20000,
    model: "Corolla",
    owners: 1,
    price: 25000,
    transmission: "Automatic",
    year: 2022,
  },
  {
    color: "White",
    engine: "1.5L 4-cylinder",
    features: ["Apple CarPlay", "Android Auto", "Lane Departure Warning"],
    fuelType: "Gasoline",
    horsepower: 158,
    id: 2,
    image:
      "https://di-uploads-pod6.dealerinspire.com/bianchihonda/uploads/2020/12/MY21_CivicSedan_Touring_PlatinumWhitePearl.png",
    make: "Honda",
    mileage: 18000,
    model: "Civic",
    owners: 2,
    price: 22000,
    transmission: "CVT",
    year: 2021,
  },
  {
    color: "Red",
    engine: "5.0L V8",
    features: ["Leather Seats", "Navigation System", "Heated Seats"],
    fuelType: "Gasoline",
    horsepower: 450,
    id: 3,
    image:
      "https://di-uploads-pod39.dealerinspire.com/kingsford/uploads/2019/10/2020-Ford-Mustang-Cincinnati-OH-Red-Left.jpg",
    make: "Ford",
    mileage: 15000,
    model: "Mustang",
    owners: 1,
    price: 35000,
    transmission: "Manual",
    year: 2020,
  },
  {
    color: "Blue",
    engine: "1.5L 4-cylinder",
    features: ["Rearview Camera", "Blind-Spot Monitoring", "Wi-Fi Hotspot"],
    fuelType: "Gasoline",
    horsepower: 170,
    id: 4,
    image:
      "https://65e81151f52e248c552b-fe74cd567ea2f1228f846834bd67571e.ssl.cf1.rackcdn.com/ldm-images/2019-chevrolet-cruze-kinetic-blue-metalic.jpg",
    make: "Chevrolet",
    mileage: 30000,
    model: "Equinox",
    owners: 2,
    price: 20000,
    transmission: "Automatic",
    year: 2019,
  },
  {
    color: "Black",
    engine: "2.5L 4-cylinder",
    features: [
      "Remote Start",
      "Automatic Emergency Braking",
      "Lane Keeping Assist",
    ],
    fuelType: "Gasoline",
    horsepower: 188,
    id: 5,
    image:
      "https://edgecast-img.yahoo.net/mysterio/api/57C4741C515C56A38233E923E55A588508C1C78B9DDC78DE05F2A12DFBB83842/autoblog/resizefill_w660_h372;quality_80;format_webp;cc_31536000;/https://s.aolcdn.com/commerce/autodata/images/USC90NIC041A021001.jpg",
    make: "Nissan",
    mileage: 22000,
    model: "Altima",
    owners: 1,
    price: 21000,
    transmission: "CVT",
    year: 2020,
  },
  {
    color: "White",
    engine: "2.0L 4-cylinder",
    features: ["Sunroof", "Adaptive Cruise Control", "Parking Assistance"],
    fuelType: "Diesel",
    horsepower: 255,
    id: 6,
    image:
      "https://65e81151f52e248c552b-fe74cd567ea2f1228f846834bd67571e.ssl.cf1.rackcdn.com/ldm-images/2021-BMW-3-Series-color-Mineral-White-Metallic.png",
    make: "BMW",
    mileage: 12000,
    model: "3 Series",
    owners: 1,
    price: 40000,
    transmission: "Automatic",
    year: 2021,
  },
  {
    color: "Red",
    engine: "Electric Motor",
    features: [
      "Autopilot",
      "Full Self-Driving Capability",
      "Premium Audio System",
    ],
    fuelType: "Electric",
    horsepower: 322,
    id: 7,
    image:
      "https://www.motortrend.com/uploads/sites/5/2021/01/Tesla_Model_X_Refresh_2.jpg",
    make: "Tesla",
    mileage: 8000,
    model: "Model 3",
    owners: 1,
    price: 45000,
    transmission: "Automatic",
    year: 2022,
  },
  {
    color: "Gray",
    engine: "2.0L 4-cylinder",
    features: ["Virtual Cockpit", "Panoramic Sunroof", "Apple CarPlay"],
    fuelType: "Gasoline",
    horsepower: 248,
    id: 8,
    image:
      "https://dealer-content.s3.amazonaws.com/images/models/audi/2021/a4/colors/terra-gray-metallic.png",
    make: "Audi",
    mileage: 15000,
    model: "Q5",
    owners: 1,
    price: 38000,
    transmission: "Automatic",
    year: 2021,
  },
  {
    color: "Silver",
    engine: "2.0L 4-cylinder",
    features: ["MBUX Infotainment", "Heated Steering Wheel", "Air Suspension"],
    fuelType: "Gasoline",
    horsepower: 255,
    id: 9,
    image:
      "https://di-uploads-pod20.dealerinspire.com/mbofportland/uploads/2019/12/2020-MB-C-Class-MLP-Hero-Image.png",
    make: "Mercedes-Benz",
    mileage: 18000,
    model: "E-Class",
    owners: 2,
    price: 42000,
    transmission: "Automatic",
    year: 2020,
  },
  {
    color: "Black",
    engine: "5.3L V8",
    features: ["Leather Seats", "Third-Row Seating", "Power Liftgate"],
    fuelType: "Gasoline",
    horsepower: 355,
    id: 10,
    image:
      "https://di-uploads-pod1.dealerinspire.com/mikeandersonchevymerrillvilleredesign/uploads/2019/10/19Chevy-Silverado1500-Jellybean-Custom-Black-1.png",
    make: "Chevrolet",
    mileage: 25000,
    model: "Tahoe",
    owners: 2,
    price: 45000,
    transmission: "Automatic",
    year: 2020,
  },
  {
    color: "Green",
    engine: "2.5L 4-cylinder",
    features: ["All-Wheel Drive", "Roof Rails", "Adaptive Cruise Control"],
    fuelType: "Gasoline",
    horsepower: 182,
    id: 11,
    image:
      "https://di-uploads-development.dealerinspire.com/subaruofbatonrouge/uploads/2022/08/Jasper-Green-Metallic.jpg",
    make: "Subaru",
    mileage: 12000,
    model: "Outback",
    owners: 1,
    price: 32000,
    transmission: "CVT",
    year: 2021,
  },
  {
    color: "White",
    engine: "3.5L V6",
    features: [
      "Premium Leather Seats",
      "Panoramic Sunroof",
      "Mark Levinson Audio",
    ],
    fuelType: "Gasoline",
    horsepower: 295,
    id: 12,
    image:
      "https://www.cars.com/i/large/in/v2/stock_photos/ffead150-afa6-482b-a125-eed96cb3b473/b0e27dec-4bfe-416c-a378-b074997fe18b.png",
    make: "Lexus",
    mileage: 8000,
    model: "RX 350",
    owners: 1,
    price: 48000,
    transmission: "Automatic",
    year: 2022,
  },
  {
    color: "Blue",
    engine: "3.5L V6",
    features: ["Towing Package", "Off-Road Package", "Sync 3 Infotainment"],
    fuelType: "Gasoline",
    horsepower: 375,
    id: 13,
    image:
      "https://cars.usnews.com/static/images/Auto/izmo/i158904820/2020_ford_explorer_angularfront.jpg",
    make: "Ford",
    mileage: 18000,
    model: "F-150",
    owners: 1,
    price: 38000,
    transmission: "Automatic",
    year: 2020,
  },
  {
    color: "Black",
    engine: "3.0L 6-cylinder",
    features: ["Heated Seats", "Wireless Charging", "Gesture Control"],
    fuelType: "Diesel",
    horsepower: 335,
    id: 14,
    image:
      "https://65e81151f52e248c552b-fe74cd567ea2f1228f846834bd67571e.ssl.cf1.rackcdn.com/ldm-images/2021-BMW-4-Series-hero.png",
    make: "BMW",
    mileage: 14000,
    model: "X5",
    owners: 1,
    price: 55000,
    transmission: "Automatic",
    year: 2021,
  },
  {
    color: "Silver",
    engine: "1.5L 4-cylinder",
    features: [
      "Adaptive Cruise Control",
      "Lane Keeping Assist",
      "Apple CarPlay",
    ],
    fuelType: "Gasoline",
    horsepower: 190,
    id: 15,
    image:
      "https://di-uploads-pod11.dealerinspire.com/hondaofkirkland/uploads/2019/08/2019-Civic-Sedan-Lunar-Silver.png",
    make: "Honda",
    mileage: 25000,
    model: "CR-V",
    owners: 2,
    price: 26000,
    transmission: "CVT",
    year: 2019,
  },
  {
    color: "White",
    engine: "2.5L 4-cylinder",
    features: [
      "Blind-Spot Monitoring",
      "Rear Cross-Traffic Alert",
      "Apple CarPlay",
    ],
    fuelType: "Gasoline",
    horsepower: 203,
    id: 16,
    image:
      "https://edgecast-img.yahoo.net/mysterio/api/19F316A3B7771D6C5E5F8A39E2433E5B3AC9558641B86AA0BA55CE966EA382FC/autoblog/resizefill_w660_h372;quality_80;format_webp;cc_31536000;/https://s.aolcdn.com/commerce/autodata/images/USD00TOS112A021001.jpg",
    make: "Toyota",
    mileage: 18000,
    model: "RAV4",
    owners: 1,
    price: 29000,
    transmission: "Automatic",
    year: 2020,
  },
  {
    color: "Red",
    engine: "Dual Electric Motors",
    features: ["Autopilot", "Premium Interior", "Panoramic Roof"],
    fuelType: "Electric",
    horsepower: 384,
    id: 17,
    image:
      "https://images.carexpert.com.au/app/uploads/2021/11/tesla-model-3-performance.jpg",
    make: "Tesla",
    mileage: 8000,
    model: "Model Y",
    owners: 1,
    price: 52000,
    transmission: "Automatic",
    year: 2022,
  },
  {
    color: "Black",
    engine: "5.3L V8",
    features: ["Towing Package", "Trailer Brake Controller", "Apple CarPlay"],
    fuelType: "Gasoline",
    horsepower: 355,
    id: 18,
    image:
      "https://di-uploads-pod2.dealerinspire.com/carlblackchevynashville/uploads/2018/10/chevy_malibu2019_black.png",
    make: "Chevrolet",
    mileage: 25000,
    model: "Silverado",
    owners: 2,
    price: 35000,
    transmission: "Automatic",
    year: 2019,
  },
  {
    color: "Gray",
    engine: "1.5L 4-cylinder",
    features: ["Apple CarPlay", "Android Auto", "Blind-Spot Monitoring"],
    fuelType: "Gasoline",
    horsepower: 181,
    id: 19,
    image:
      "https://cdn.motor1.com/images/mgl/Bj1eA/s1/2021-ford-ranger-cactus-gray-front-view.jpg",
    make: "Ford",
    mileage: 12000,
    model: "Escape",
    owners: 1,
    price: 28000,
    transmission: "Automatic",
    year: 2021,
  },
  {
    color: "Silver",
    engine: "2.0L 4-cylinder",
    features: [
      "MBUX Infotainment",
      "Panoramic Sunroof",
      "Adaptive Cruise Control",
    ],
    fuelType: "Gasoline",
    horsepower: 255,
    id: 20,
    image:
      "https://pictures.dealer.com/d/downtownmotorsmercedesbenz/1507/eb6dff64533a54fc292786a48c55bed0x.jpg",
    make: "Mercedes-Benz",
    mileage: 18000,
    model: "GLE 350",
    owners: 2,
    price: 46000,
    transmission: "Automatic",
    year: 2020,
  },
  {
    color: "Blue",
    engine: "2.0L 4-cylinder",
    features: ["Head-Up Display", "Wireless Charging", "Parking Assistance"],
    fuelType: "Gasoline",
    horsepower: 255,
    id: 21,
    image: "https://i.ytimg.com/vi/R5Pzx_9al0g/hqdefault.jpg",
    make: "BMW",
    mileage: 10000,
    model: "4 Series",
    owners: 1,
    price: 48000,
    transmission: "Automatic",
    year: 2021,
  },
];

export default Cars;
