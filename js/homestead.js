(function () {
	'use strict';

    var game = new Homestead('map');
    game.init();
})();

function Homestead(canvasId) {
	'use strict';

    var self = this;

    // DOM Elements -----------------------------------------------------------/
    this.canvas = document.getElementById(canvasId);

    // Properties -------------------------------------------------------------/
    this.environment = environment;
    this.events = events;
    this.farm = new Farm();

    // Methods ----------------------------------------------------------------/
    this.init = init;

    // Declare Literals -------------------------------------------------------/
    var environment = {
        viewport: {
            height: window.innerHeight,
            width: window.innerWidth
        }
    };

    var controls = {
    	zoom: {
    		in: $('#zoomIn'),
    		out: $('#zoomOut')
    	}
    };

    var events = {
        resize: function () {
            self.canvas.height = environment.viewport.height;
            self.canvas.width = environment.viewport.width;
        }
    };

    var crops = [
	  {
	  	name: "bean", 
	  	price: 5, 
	  	value: 15, 
	  	current: 0
	  },
	  {
	  	name: "corn", 
	  	price: 10, 
	  	value: 35, 
	  	current: 0
	  },
	  {
	  	name: "tomato", 
	  	price: 10, 
	  	value: 30, 
	  	current: 0
	  }
	];

    // Declare Objects --------------------------------------------------------/

    function Farm() {
        var _name = null;
        var _money = 2000;
        var _map = null;

        this.getName = getName;
        this.setName = setName;
        this.getMoney = getMoney;
        this.setMoney = setMoney;
        this.getMap = getMap;
        this.setMap = setMap;

        function getName() {
    		return _name;
        };

        function setName(name) {
    		_name = name;
        };

        function getMoney() {
        	return _money;
        };

        function setMoney(money) {
        	_money = money;
        };

        function getMap() {
    		return _map;
        };

        function setMap(map) {
        	_map = map;
        };

        function Map() {
        	this.draw = draw;

        	function draw() {

        	};
        };

        function Tile() {
    		this.getType = getType;
    		this.setType = setType;
    		this.getTileTypes = getTileTypes;

    		var type = null;
    		var size = 32;

    		var _tileTypes = {
    			dirt: { 
    				pos: {
    					c: {
    						x: 1,
							y: 0
    					}
    				}
    			},
    			grass:{
    				pos: {
    					nw: {
    						x: 0,
    						y: 0
    					}
    					n: {
    						x: 0,
    						y: 0
    					}
    					ne: {
    						x: 0,
    						y: 0
    					}
    					w: {
    						x: 0,
    						y: 0
    					}
    					c: {
    						x: 0,
    						y: 0
    					}
    					e: {
    						x: 0,
    						y: 0
    					},
    					sw: {
    						x: 0,
    						y: 0
    					},
    					s: {
    						x: 0,
    						y: 0
    					},
    					se: {
    						x: 0,
    						y: 0
    					}
    				}
    			},
    			brush:{
    				pos: {
    					nw: {
    						x: 0,
    						y: 0
    					}
    					n: {
    						x: 0,
    						y: 0
    					}
    					ne: {
    						x: 0,
    						y: 0
    					}
    					w: {
    						x: 0,
    						y: 0
    					}
    					c: {
    						x: 0,
    						y: 0
    					}
    					e: {
    						x: 0,
    						y: 0
    					},
    					sw: {
    						x: 0,
    						y: 0
    					},
    					s: {
    						x: 0,
    						y: 0
    					},
    					se: {
    						x: 0,
    						y: 0
    					}
    				}
    			},
    			water:{
    				pos: {
    					nw: {
    						x: 0,
    						y: 0
    					}
    					n: {
    						x: 0,
    						y: 0
    					}
    					ne: {
    						x: 0,
    						y: 0
    					}
    					w: {
    						x: 0,
    						y: 0
    					}
    					c: {
    						x: 0,
    						y: 0
    					}
    					e: {
    						x: 0,
    						y: 0
    					},
    					sw: {
    						x: 0,
    						y: 0
    					},
    					s: {
    						x: 0,
    						y: 0
    					},
    					se: {
    						x: 0,
    						y: 0
    					}
    				}
    			},
    			clay:{
    				pos: {
    					nw: {
    						x: 0,
    						y: 0
    					}
    					n: {
    						x: 0,
    						y: 0
    					}
    					ne: {
    						x: 0,
    						y: 0
    					}
    					w: {
    						x: 0,
    						y: 0
    					}
    					c: {
    						x: 0,
    						y: 0
    					}
    					e: {
    						x: 0,
    						y: 0
    					},
    					sw: {
    						x: 0,
    						y: 0
    					},
    					s: {
    						x: 0,
    						y: 0
    					},
    					se: {
    						x: 0,
    						y: 0
    					}
    				}
    			},
    			stone:{
    				pos: {
    					nw: {
    						x: 0,
    						y: 0
    					}
    					n: {
    						x: 0,
    						y: 0
    					}
    					ne: {
    						x: 0,
    						y: 0
    					}
    					w: {
    						x: 0,
    						y: 0
    					}
    					c: {
    						x: 0,
    						y: 0
    					}
    					e: {
    						x: 0,
    						y: 0
    					},
    					sw: {
    						x: 0,
    						y: 0
    					},
    					s: {
    						x: 0,
    						y: 0
    					},
    					se: {
    						x: 0,
    						y: 0
    					}
    				}
    			}
    		};

    		function getType() {
    			return _type;
    		}

    		function getSize() {
    			return _size;
    		}

    		function setType(type) {
    			_type = type;
    		}

    		function getTileTypes() {
    			return _tileTypes;
    		}
        }
    }    

    // Declare Functions ------------------------------------------------------/

    function init() {
    	bindEvents();
    };

    function bindEvents() {
        $(document).ready(events.resize);
        $(window).resize(events.resize)
    };
};

/*

function gone(){
  $("#newFarm").css({display: "none"});
}

function popInvo(){
  for (var i = 0; i < crops.length; i++) {
    crops[i].current = 15;
    $("#invoList").append("<li>" + crops[i].name + " : " + crops[i].current + "</li>");
  };
}

$("#createNewFarm").click(function(){
  var newFarm = new Farm();
    if($("#newName").val() == ""){
      newFarm.name = "Unnamed"}
      else {newFarm.name = $("#newName").val();};
  $("#newFarm").animate({opacity: 0}, 500);
  $("#newFarm").animate({height: 0, margin: 0, padding: 0}, 500, gone);
  $("#name").html(newFarm.name);
  $("#money").html("$" + newFarm.money);


  popInvo();
});

$("#invo h2").click(function(){
  $("#invo").css({height: "auto"});
});

var ground = [
  [00, 00, 00, 00, 00, 00, 51, 52, 43, 43, 43, 43, 43, 43, 43, 43, 53, 36, 37, 38],
  [00, 00, 00, 00, 00, 30, 31, 32, 51, 52, 43, 43, 43, 43, 43, 44, 00, 36, 37, 38],
  [00, 00, 00, 00, 30, 40, 40, 40, 31, 32, 51, 52, 43, 43, 43, 53, 00, 36, 37, 38],
  [00, 00, 00, 30, 40, 40, 40, 40, 40, 40, 31, 32, 51, 52, 53, 00, 00, 36, 37, 38],
  [00, 00, 00, 39, 40, 40, 40, 40, 40, 40, 40, 40, 31, 31, 31, 32, 00, 36, 37, 38],
  [00, 00, 30, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 32, 36, 37, 38],
  [31, 31, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 50, 36, 37, 38],
  [40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 50, 00, 36, 37, 38],
  [40, 40, 40, 40, 40, 49, 49, 49, 49, 40, 40, 40, 40, 40, 50, 00, 00, 36, 37, 38],
  [40, 40, 40, 40, 50, 33, 35, 00, 00, 48, 40, 40, 40, 50, 00, 33, 35, 36, 37, 38],
  [40, 40, 40, 41, 33, 43, 53, 00, 00, 00, 48, 49, 50, 00, 00, 42, 44, 36, 37, 38],
  [40, 40, 40, 41, 51, 53, 30, 32, 00, 00, 00, 00, 00, 00, 00, 42, 44, 36, 37, 38],
  [40, 40, 40, 40, 31, 31, 40, 50, 33, 34, 34, 35, 00, 00, 33, 43, 44, 36, 37, 38],
  [40, 40, 40, 40, 40, 40, 50, 33, 43, 43, 43, 43, 34, 34, 43, 43, 44, 36, 37, 38],
  [40, 40, 40, 40, 40, 41, 33, 43, 43, 43, 43, 43, 43, 43, 43, 43, 44, 36, 37, 38],
  [40, 40, 49, 49, 49, 50, 42, 43, 43, 43, 43, 43, 43, 43, 43, 43, 44, 36, 37, 38],
  [49, 50, 00, 00, 33, 34, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 44, 36, 37, 38],
  [00, 00, 33, 34, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 44, 36, 37, 38],
  [34, 34, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 44, 36, 37, 38],
  [43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 44, 36, 37, 38]
];

/* The following code was adapted from http://blog.sklambert.com/create-a-canvas-tileset-background/*/

/*var tilesetImage = new Image();
tilesetImage.src = 'images/tile-set.png';
tilesetImage.onload = drawImage;
var canvas = document.getElementById("map");
var context = canvas.getContext('2d');
var tileSize = 32;       // The size of a tile (32×32)
var rowTileCount = 20;   // The number of tiles in a row of our background
var colTileCount = 20;   // The number of tiles in a column of our background
var imageNumTiles = 9;  // The number of tiles per row in the tileset image
function drawImage () {
   for (var r = 0; r < rowTileCount; r++) {
      for (var c = 0; c < colTileCount; c++) {
         var tile = ground[ r ][ c ];
         var tileRow = (tile / imageNumTiles) | 0; // Bitwise OR operation
         var tileCol = (tile % imageNumTiles) | 0;
         context.drawImage(tilesetImage, (tileCol * tileSize), (tileRow * tileSize), tileSize, tileSize, (c * tileSize), (r * tileSize), tileSize, tileSize);
      }
   }
}

var n = 0;
$("#scaleUp").click(function(){
  if(n<0) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.scale(2, 2);
    drawImage();
    n++;
    console.log(n);
  };
});

$("#scaleDown").click(function(){
  if(n>-3){
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.scale(0.5, 0.5);
    drawImage();
    n--;
    console.log(n);
  };
});

// This code was adapted from http://miloq.blogspot.com/2011/05/coordinates-mouse-click-canvas.html
canvas.addEventListener("mousedown", getPosition, false);

function getPosition(event)
{
  var x = event.x;
  var y = event.y;

  x -= canvas.offsetLeft;
  y -= canvas.offsetTop;

  var column = Math.floor(x/32);
  var row = Math.floor(y/32);
  var tileType = ground[row][column];

  console.log("x:" + x + " y:" + y);
  console.log(tileType);

  };

  $('#map').bind('mousewheel', function (e) {
      if (e.originalEvent.wheelDelta / 120 > 0) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.scale(2, 2);
        drawImage();
      } else {
        context.clearRect(0, 0, canvas.width, canvas.height);
        scale = context.scale(0.5, 0.5);
        drawImage();
      }
  });*/
