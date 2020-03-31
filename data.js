var APP_DATA = {
  "scenes": [
    {
      "id": "0-entry",
      "name": "Entry",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.2663397638325993,
          "pitch": 0.09067487832332333,
          "rotation": 1.5707963267948966,
          "target": "1-kitchen"
        },
        {
          "yaw": -0.41331663271416197,
          "pitch": 0.08691844804203441,
          "rotation": 5.497787143782138,
          "target": "2-study"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.775693724327459,
        "pitch": 0.037485051546958914,
        "fov": 1.307633212018712
      },
      "linkHotspots": [
        {
          "yaw": -0.2371061564740522,
          "pitch": 0.10696176481739172,
          "rotation": 4.71238898038469,
          "target": "0-entry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-study",
      "name": "Study",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.5874493230758286,
        "pitch": -0.037250093268164974,
        "fov": 1.307633212018712
      },
      "linkHotspots": [
        {
          "yaw": -2.715728610825284,
          "pitch": 0.12138297150525545,
          "rotation": 4.71238898038469,
          "target": "4-bathroom"
        },
        {
          "yaw": -0.4775261175426735,
          "pitch": 0.265820406495898,
          "rotation": 1.5707963267948966,
          "target": "3-bedroom"
        },
        {
          "yaw": -1.5573158270595098,
          "pitch": 0.3582755605349739,
          "rotation": 10.210176124166829,
          "target": "0-entry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-bedroom",
      "name": "Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.7831838035404353,
        "pitch": -0.019290133547180233,
        "fov": 1.307633212018712
      },
      "linkHotspots": [
        {
          "yaw": -1.2620430658985171,
          "pitch": 0.14816180429269288,
          "rotation": 1.5707963267948966,
          "target": "2-study"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-bathroom",
      "name": "Bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -3.098661840773815,
        "pitch": -0.01286196537638773,
        "fov": 1.307633212018712
      },
      "linkHotspots": [
        {
          "yaw": -2.5500107722888927,
          "pitch": 0.21717610919341723,
          "rotation": 1.5707963267948966,
          "target": "2-study"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
