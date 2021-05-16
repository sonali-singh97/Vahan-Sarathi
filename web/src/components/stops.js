import { Point } from "mapbox-gl";

const geojson = {
  type: 'FeatureCollection',
  features: [{
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [ 76.584432, 29.9844213]
    },
    properties: {
      title: 'Pehowa Bustand',
      description: "https://lh5.googleusercontent.com/p/AF1QipPpR0cLA6EQoKc7TlX6uhC9RSwkShpiPTkURCnX=w408-h306-k-no"
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [  76.5851455 , 29.9841564],
    
    },
    properties: {
      title: "Pehowa Busstop",
      description: "https://lh5.googleusercontent.com/p/AF1QipPpR0cLA6EQoKc7TlX6uhC9RSwkShpiPTkURCnX=w408-h306-k-no"
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: "Point",
      coordinates:  [ 76.5846198 ,29.9816055 ],
    },
    properties: {
      title: "Pehowa Main Chowk",
      description: "https://lh5.googleusercontent.com/p/AF1QipPpR0cLA6EQoKc7TlX6uhC9RSwkShpiPTkURCnX=w408-h306-k-no"
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: "Point",
      coordinates:  [   76.6092317 ,29.9763965 ]
    },
    properties: {
      title: "Ambala-Hisar Highway",
      description: "https://lh5.googleusercontent.com/p/AF1QipPpR0cLA6EQoKc7TlX6uhC9RSwkShpiPTkURCnX=w408-h306-k-no"
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: "Point",
      coordinates:  [  76.6597753 , 29.9676973 ],
    },
    properties: {
      title:"Murtzapur Stop",
      description: "https://lh5.googleusercontent.com/p/AF1QipPpR0cLA6EQoKc7TlX6uhC9RSwkShpiPTkURCnX=w408-h306-k-no"
    }
  },

  {
    type: 'Feature',
    geometry: {
      type:'Point' ,
      coordinates:  [   76.7135053, 29.9586301  ],
    },
    properties: {
      title: "KITM-DPS Stop",
      description: "https://lh5.googleusercontent.com/p/AF1QipPpR0cLA6EQoKc7TlX6uhC9RSwkShpiPTkURCnX=w408-h306-k-no"
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: "Point",
      coordinates:  [ 76.7297058 , 29.956864 ],
    },
    properties: {
      title: "Lohar Majra Stop",
      description: "https://lh5.googleusercontent.com/p/AF1QipPpR0cLA6EQoKc7TlX6uhC9RSwkShpiPTkURCnX=w408-h306-k-no"
    }
  },

  {
    type: 'Feature',
    geometry: {
      type:  "Point",
      coordinates: [ 76.584432, 29.9844213]
    },
    properties: {
      title: "Jyotisar Busstop",
      description: "https://lh5.googleusercontent.com/p/AF1QipPpR0cLA6EQoKc7TlX6uhC9RSwkShpiPTkURCnX=w408-h306-k-no"
    }
  },

  {
    type: 'Feature',
    geometry: {
      type:  "Point",
      coordinates:  [  76.7731811, 29.9599751  ],
    },
    properties: {
      title: "Narkatari-Gurukul Stop",
      description: "https://lh5.googleusercontent.com/p/AF1QipPpR0cLA6EQoKc7TlX6uhC9RSwkShpiPTkURCnX=w408-h306-k-no"
    }
  },

  {
    type: 'Feature',
    geometry: {
      type:  "Point",
      coordinates:  [   76.8101527, 29.9629588 ],
    },
    properties: {
      title:  "Kurukshetra University-LNJP stop",
      description: "https://lh5.googleusercontent.com/p/AF1QipPpR0cLA6EQoKc7TlX6uhC9RSwkShpiPTkURCnX=w408-h306-k-no"
    }
  },

  {
    type: 'Feature',
    geometry: {
      type:  "Point",
      coordinates:   [ 76.8140795, 29.964353  ],
    },
    properties: {
      title: "Birla Mandir - BharamSarovar",
      description: "https://lh5.googleusercontent.com/p/AF1QipPpR0cLA6EQoKc7TlX6uhC9RSwkShpiPTkURCnX=w408-h306-k-no"
    }
  },

  {
    type: 'Feature',
    geometry: {
      type:  "Point",
      coordinates:       [  76.8281557 , 29.9669183  ],
    },
    properties: {
      title: "Gurudwara 6th Patshahi - Sanhiet Sarovar",
      description: "https://lh5.googleusercontent.com/p/AF1QipPpR0cLA6EQoKc7TlX6uhC9RSwkShpiPTkURCnX=w408-h306-k-no"
    }
  },

  {
    type: 'Feature',
    geometry: {
      type:  "Point",
      coordinates:  [   76.8375434 , 29.9727273   ],
    },
    properties: {
      title:   "Old Bus stand Kurukshetra",
      description: "https://lh5.googleusercontent.com/p/AF1QipPpR0cLA6EQoKc7TlX6uhC9RSwkShpiPTkURCnX=w408-h306-k-no"
    }
  },

  {
    type: 'Feature',
    geometry: {
      type:  "Point",
      coordinates:  [   76.8565871 , 29.9734615],
    },
    properties: {
      title: "Sector 13 - Aggarsain Chowk",
      description: "https://lh5.googleusercontent.com/p/AF1QipPpR0cLA6EQoKc7TlX6uhC9RSwkShpiPTkURCnX=w408-h306-k-no"
    }
  },

  {
    type: 'Feature',
    geometry: {
      type:  "Point",
      coordinates: [    76.8655028 ,29.9741028 ],
    },
    properties: {
      title: "New Bus Stand Kurukshetra",
      description: "https://lh5.googleusercontent.com/p/AF1QipPpR0cLA6EQoKc7TlX6uhC9RSwkShpiPTkURCnX=w408-h306-k-no"
    }
  },

  {
    type: 'Feature',
    geometry: {
      type:  "Point",
      coordinates:  [  76.8923034 ,  29.9789633    ]
    },
    properties: {
      title: "Pipli",
      description: "https://lh5.googleusercontent.com/p/AF1QipPpR0cLA6EQoKc7TlX6uhC9RSwkShpiPTkURCnX=w408-h306-k-no"
    }
  },
]
};
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