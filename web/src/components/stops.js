
import icon from "./../assets/images/bus.png"
import dest from "./../assets/images/icon.png"
import L from "leaflet";

const destIcon = new L.Icon({
  iconUrl: icon,
  iconSize: [40, 40],
  iconAnchor: [17, 46],
  popupAnchor: [0, -46],
});

const stopIcon = new L.Icon({
  iconUrl: dest,
  iconSize: [50, 50],
  iconAnchor: [17, 46], 
  popupAnchor: [0, -46], 
});


const geojson =[{
      coordinates: [  29.9844213 , 76.584432],
      name: 'Pehowa Bustand',
      image: "https://lh5.googleusercontent.com/p/AF1QipPpR0cLA6EQoKc7TlX6uhC9RSwkShpiPTkURCnX=w408-h306-k-no",
      icon: destIcon
  },

  {
   
      coordinates: [   29.9841564, 76.5851455 ],
      icon: stopIcon,
      name: "Pehowa Busstop",
      image: "https://lh5.googleusercontent.com/p/AF1QipPpR0cLA6EQoKc7TlX6uhC9RSwkShpiPTkURCnX=w408-h306-k-no"
    
  },

  {

    coordinates: [ 29.9816055,   76.5846198 ],
      icon: stopIcon,
      name: "Pehowa Main Chowk",
      image: "https://lh5.googleusercontent.com/p/AF1QipPpR0cLA6EQoKc7TlX6uhC9RSwkShpiPTkURCnX=w408-h306-k-no"
    
  },
  {
    
      coordinates:  [  29.9763965 ,  76.6092317 ],
      icon : stopIcon,
      name: "Ambala-Hisar Highway",
      image: "https://lh5.googleusercontent.com/p/AF1QipPpR0cLA6EQoKc7TlX6uhC9RSwkShpiPTkURCnX=w408-h306-k-no"
    
  },

  {
      coordinates:  [  29.9676973,  76.6597753  ],
      icon: stopIcon,
      name:"Murtzapur Stop",
      image: "https://lh5.googleusercontent.com/p/AF1QipPpR0cLA6EQoKc7TlX6uhC9RSwkShpiPTkURCnX=w408-h306-k-no"
    
  },

  {
      coordinates:  [ 29.9586301,   76.7135053  ],
      icon : stopIcon,
      name: "KITM-DPS Stop",
      image: "https://lh5.googleusercontent.com/p/AF1QipPpR0cLA6EQoKc7TlX6uhC9RSwkShpiPTkURCnX=w408-h306-k-no"
    
  },

  {
      coordinates:  [ 29.956864 ,  76.7297058 ],
      icon : stopIcon,
      name: "Lohar Majra Stop",
      image: "https://lh5.googleusercontent.com/p/AF1QipPpR0cLA6EQoKc7TlX6uhC9RSwkShpiPTkURCnX=w408-h306-k-no"
    
  },

  {
      coordinates: [ 29.95997514,  76.7731811],
      icon : stopIcon,
      name: "Jyotisar Busstop",
      image: "https://lh5.googleusercontent.com/p/AF1QipPpR0cLA6EQoKc7TlX6uhC9RSwkShpiPTkURCnX=w408-h306-k-no"
    
  },

  {
      coordinates:  [ 29.9599751,  76.7731811  ],
     icon : stopIcon,
      name: "Narkatari-Gurukul Stop",
      image: "https://lh5.googleusercontent.com/p/AF1QipPpR0cLA6EQoKc7TlX6uhC9RSwkShpiPTkURCnX=w408-h306-k-no"
    
  },

  {
      coordinates:  [   29.9629588 , 76.8101527, ],
      icon : stopIcon,
      name:  "Kurukshetra University-LNJP stop",
      image: "https://lh5.googleusercontent.com/p/AF1QipPpR0cLA6EQoKc7TlX6uhC9RSwkShpiPTkURCnX=w408-h306-k-no"
    
  },

  {
      coordinates:   [  29.964353 , 76.8140795, ],
      icon : stopIcon,
      name: "Birla Mandir - BharamSarovar",
      image: "https://lh5.googleusercontent.com/p/AF1QipPpR0cLA6EQoKc7TlX6uhC9RSwkShpiPTkURCnX=w408-h306-k-no"
  
  },

  {
      coordinates:       [ 29.9669183 ,  76.8281557 ,  ],
      icon : stopIcon,
      name: "Gurudwara 6th Patshahi - Sanhiet Sarovar",
      image: "https://lh5.googleusercontent.com/p/AF1QipPpR0cLA6EQoKc7TlX6uhC9RSwkShpiPTkURCnX=w408-h306-k-no"
    
  },

  {
      coordinates:  [  29.9727273 ,   76.8375434 ,  ],
     icon: stopIcon,
      name:   "Old Bus stand Kurukshetra",
      image: "https://lh5.googleusercontent.com/p/AF1QipPpR0cLA6EQoKc7TlX6uhC9RSwkShpiPTkURCnX=w408-h306-k-no"
    
  },

  {
      coordinates:  [  29.9734615,   76.8565871 ,],
       icon : stopIcon,
      name : "Sector 13 - Aggarsain Chowk",
      image: "https://lh5.googleusercontent.com/p/AF1QipPpR0cLA6EQoKc7TlX6uhC9RSwkShpiPTkURCnX=w408-h306-k-no"
    
  },

  { 
      coordinates: [ 29.9741028,  76.8655028 , ],
      icon : stopIcon,
      name: "New Bus Stand Kurukshetra",
      image: "https://lh5.googleusercontent.com/p/AF1QipPpR0cLA6EQoKc7TlX6uhC9RSwkShpiPTkURCnX=w408-h306-k-no"
    
  },

  {
      coordinates:  [  29.9789633  , 76.8923034  ],
       icon : destIcon,
      name: "Pipli",
      image: "https://lh5.googleusercontent.com/p/AF1QipPpR0cLA6EQoKc7TlX6uhC9RSwkShpiPTkURCnX=w408-h306-k-no"
    
  },
];

export default geojson;

// [
//     {
//       "stop": "Pehowa Bustand",
//       "image": "https://lh5.googleusercontent.com/p/AF1QipPpR0cLA6EQoKc7TlX6uhC9RSwkShpiPTkURCnX=w408-h306-k-no",
//       "latitude": 29.9844213,
//       "longitude": 76.584432
//     },
//     {
//         "stop": "Pehowa Busstop",
//         "image": "https://lh5.googleusercontent.com/p/AF1QipPpR0cLA6EQoKc7TlX6uhC9RSwkShpiPTkURCnX=w408-h306-k-no",
//         "latitude": 29.9841564,
//         "longitude": 76.5851455
//       } ,

//       {
//         "stop": "Pehowa Main Chowk",
//         "image": "https://lh5.googleusercontent.com/p/AF1QipPpR0cLA6EQoKc7TlX6uhC9RSwkShpiPTkURCnX=w408-h306-k-no",
//         "latitude": 29.9816055,
//         "longitude": 76.5846198
//       } ,

//       {
//         "stop": "Ambala-Hisar Highway",
//         "image": "https://lh5.googleusercontent.com/p/AF1QipPpR0cLA6EQoKc7TlX6uhC9RSwkShpiPTkURCnX=w408-h306-k-no",
//         "latitude": 29.9763965,
//         "longitude":  76.6092317
//       } ,
    
//       {
//         "stop": "Murtzapur Stop",
//         "image": "https://lh5.googleusercontent.com/p/AF1QipPpR0cLA6EQoKc7TlX6uhC9RSwkShpiPTkURCnX=w408-h306-k-no",
//         "latitude": 29.9676973,
//         "longitude":   76.6597753
//       } ,
//       {
//         "stop":  "KITM-DPS Stop",
//         "image": "https://lh5.googleusercontent.com/p/AF1QipPpR0cLA6EQoKc7TlX6uhC9RSwkShpiPTkURCnX=w408-h306-k-no",
//         "latitude": 29.9586301,
//         "longitude":   76.7135053
//       } ,
//       {
//         "stop":  "Lohar Majra Stop",
//         "image": "https://lh5.googleusercontent.com/p/AF1QipPpR0cLA6EQoKc7TlX6uhC9RSwkShpiPTkURCnX=w408-h306-k-no",
//         "latitude": 29.956864,
//         "longitude":   76.7297058
//       } ,
    
//       {
//         "stop":  "Jyotisar Busstop",
//         "image": "https://lh5.googleusercontent.com/p/AF1QipPpR0cLA6EQoKc7TlX6uhC9RSwkShpiPTkURCnX=w408-h306-k-no",
//         "latitude": 29.95997514,
//         "longitude":  76.7731811
//       } ,
//       {
//         "stop":  "Narkatari-Gurukul Stop",
//         "image": "https://lh5.googleusercontent.com/p/AF1QipPpR0cLA6EQoKc7TlX6uhC9RSwkShpiPTkURCnX=w408-h306-k-no",
//         "latitude":  29.9629588,
//         "longitude":  76.8101527
//       } ,
//       {
//         "stop": "Kurukshetra University-LNJP stop",
//         "image": "https://lh5.googleusercontent.com/p/AF1QipPpR0cLA6EQoKc7TlX6uhC9RSwkShpiPTkURCnX=w408-h306-k-no",
//         "latitude":  29.964353,
//         "longitude": 76.8140795
//       } ,

//       {
//         "stop": "Birla Mandir - BharamSarovar",
//         "image": "https://lh5.googleusercontent.com/p/AF1QipPpR0cLA6EQoKc7TlX6uhC9RSwkShpiPTkURCnX=w408-h306-k-no",
//         "latitude":   29.9669183,
//         "longitude":76.8281557
//       } ,
    
//       {
//         "stop": "Gurudwara 6th Patshahi - Sanhiet Sarovar",
//         "image": "https://lh5.googleusercontent.com/p/AF1QipPpR0cLA6EQoKc7TlX6uhC9RSwkShpiPTkURCnX=w408-h306-k-no",
//         "latitude":   29.9688237,
//         "longitude": 76.8347754
//       } ,
    
//       {
//         "stop":  "Old Bus stand Kurukshetra",
//         "image": "https://lh5.googleusercontent.com/p/AF1QipPpR0cLA6EQoKc7TlX6uhC9RSwkShpiPTkURCnX=w408-h306-k-no",
//         "latitude":  29.9727273,
//         "longitude": 76.8375434
//       } ,
    
//       {
//         "stop":  "Sector 13 - Aggarsain Chowk",
//         "image": "https://lh5.googleusercontent.com/p/AF1QipPpR0cLA6EQoKc7TlX6uhC9RSwkShpiPTkURCnX=w408-h306-k-no",
//         "latitude":   29.9734615,
//         "longitude":  76.8565871
//       } ,
//       {
//         "stop":  "New Bus Stand Kurukshetra",
//         "image": "https://lh5.googleusercontent.com/p/AF1QipPpR0cLA6EQoKc7TlX6uhC9RSwkShpiPTkURCnX=w408-h306-k-no",
//         "latitude":    29.9741028,
//         "longitude":   76.8655028
//       } ,
//       {
//         "stop":   "Pipli",
//         "image": "https://lh5.googleusercontent.com/p/AF1QipPpR0cLA6EQoKc7TlX6uhC9RSwkShpiPTkURCnX=w408-h306-k-no",
//         "latitude":    29.9789633,
//         "longitude":   76.8923034
//       } 



// ]