/**
 *
 * Lato Clock
 *
 * lato.slow.js, a version of Lato that does not use fast load
 * To add support for clock_info_supprt we add the code marked at [1] and [2]
 *
 */

Graphics.prototype.setFontLato = function(scale) {
  // Actual height 50 (54 - 5)
  this.setFontCustom(
    E.toString(require('heatshrink').decompress(atob('ADkD8AHFg/wA4sP/AHVD44HHgPALD0OA40+F43+H4wHGn/8A4v/L4sH/5PFj//CxkD/6eFCw9/GooWHh//wAWLgP/TgoWHn5rFCw41BMYqCHaRDKGgzLYKAJgFv//LIhQBAAI7DWgIABU4adBAAJTDn4HCVAaOCQQhvDAYQuBDYaxBgJEDh4HBgYzDPgUDIYYECA5DUDgIHBg4HEEgIHfF44/EA45HDL4xvHP46PHT5CvHX47PDGYcDb4zvHf5AA/AA9wA4yoDZYq/DXAgHDXYQHEXYQHEj4HHXYQHDn6UCA4d/e4sAXYYHCd4gHCXwbADA86DFA/4HGAGA3Db40HA4UDe40Hc4YHCh7nDA4UfA4X/A4U/A4b/Cv7vGX4UB/A+CZ4YaCgf9A4sH+IHCHwfjA4JWDj/DA4s/wYHFv4kCA4f+A4pKBA4sD/AHCG4R9BA4YCBj/gA4s/4AECN4R5BA4f/gf/Mgn///+A4wZBA4d//6JBA4c/VATHEVASUEEwIHEAAbnDAGbyCAAg+DgKwDA4S4DLQSlCSYQHCn4HDFAV/bAX/4ADFCYgbCh4zHZ4SlBR4iSEA46XCe4QHCDgJWCngHOnwHGvwHRG4iFBI4ppBA4f4OIRnCN4MD9+AO4f///v8CHCDoP/54CBS4f/44CBU4f/wYHBX4f/EQLHDh6gB/6jDZQaTDAEUcA40/A4xODYoYHGgYHGh4HGNIIuG74uGz4uGj4uF/gHFh/4A4sf+AHFn/AA4q0BA4kBVgIHEFwIHFFwIHFj7jBA4guBA4rjCA4YuCA4guCA4r0BAATgBA75SEa4wHvAEEBA40DUYIAEg4HDgZ0Bh67BXAQHCZYJMBA4UHA4KPCA4SXEAgQHL4IEBgIHC/AMCgP4CQUDFgIHoIQY3DA4wCEDggHFO4YHB/iHDCQX+gE/S4IHCOIP/U4IHCv6CBA4k/A4K1CEQKpBEIIHDh//HILSDTQK+CAAd/f64Amn4GFgLxCAAZfBSIIADN4heDP4YeDR4Z5CEwN/U4IABg4NBj6ADEwLHDIoQtBVgQuCHoIHDFwIHBe4QLB/14A4kH/i1BeQQuB/AHFn/wA4pLBA4guBwAHELoMAA4o9BA4Q3BgYFBJ4gCCA4pqBvxvDf4T2Bh4HCIIc/R4MCKISfBS4aQCU4gHDX4ioBY4paBNwQAD/6uDAAUOf4wAjO4QHNdQYHYmAHGW4gUEA4kPA4z7BA4v/A4qYBY4QHCh63CA4c/V4QHDV4Y6DV4YHCDwYHDDwYHDv7ODA4MBZwgHBcwL1DA4MfdogHBDwgHB+LtFgf3DwhMCDwgHCDwhcFA4geEA4IeFA4IeFd5AArj77EsCgB/gGCg5QBOQkf/6oB/77D//DA4JrCv//44HB4DkC//n/E/MgIcCRIMPA4X8RIUHegQCBFoL8DA4cBA4QaBv4HGvwHBTgMHHQM+HgIHhF44HFJ5RfGN45/Bz6NBP4SPHT4XnT4ivHX47PHgCQCb4bvIAHxdBMgRfD/58CKgf/WgIADP4JlFR4J1ET4QHCiACBQwQEBuC/CDIIHBX4QtBn+Aa4sfZ4bvCh+Ah4HGUAUHA4d/AgIHEa4QHDwJyCA4eDKIQHDx5pCA4bPDG4c/RIRPCjwuCA4aJBUwZnCRAcBP4SgE/+D/7+ET4ImDA4jIEX4KvFh7HGgbXGgF+f6oAggZeBSgShEb4RYCagQHGh5iDA5QXEE443HADoA=='))),
    46,
    atob("DhglJSUlJSUlJSUlEA=="),
    64+(scale<<8)+(1<<16)
  );
  return this;
};


Graphics.prototype.setFontLatoSmall = function(scale) {
  // Actual height 25 (24 - 0)
  this.setFontCustom(
    E.toString(require('heatshrink').decompress(atob('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'))),
    32,
    atob("BQkKDw8UEgYICAoPBQkFCQ8PDw8PDw8PDw8GBg8PDwoVERAREw8OEhMICxENFxMUDxQQDQ8SERkQEBAICQgPCggNDgwODQgNDgYGDQYVDg4ODgoLCQ4NEw0NDAgICA8AAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAADAAFCQ8PDw8IDQgUCQwPABQICg8ICAgOEQcICAoMEhISChERERERERcRDw8PDwgICAgUExQUFBQUDxQSEhISEA8PDQ0NDQ0NFAwNDQ0NBgYGBg4ODg4ODg4PDg4ODg4NDg0="),
    25+(scale<<8)+(1<<16)
  );
  return this;
};

function draw() {
  var date = new Date();
  var timeStr = require("locale").time(date,1);
  var h = g.getHeight();
  var w = g.getWidth();

  g.reset();
  g.setColor(g.theme.bg);
  g.fillRect(Bangle.appRect);

  //g.setFont('Vector', w/3);
  g.setFontLato();
  g.setFontAlign(0, 0);
  g.setColor(g.theme.fg);
  g.drawString(timeStr, w/2, h/2);
  clockInfoMenu.redraw();   // clock_info_support
  queueDraw(); // queue draw in one minute
}

// timeout used to update every minute
var drawTimeout;

// schedule a draw for the next minute
function queueDraw() {
  if (drawTimeout) clearTimeout(drawTimeout);
  drawTimeout = setTimeout(function() {
    drawTimeout = undefined;
    draw();
  }, 60000 - (Date.now() % 60000));
}

/**
 * clock_info_support
 * this is the callback function that get invoked by clockInfoMenu.redraw();
 * 
 * We will display the image and text on the same line and centre the combined
 * length of the image+text
 *
 *
 */
function clockInfoDraw(itm, info, options) {
  g.reset().setFontLatoSmall();
  g.setBgColor(options.bg).setColor(options.fg);

  //use info.text.toString(), steps does not have length defined
  var text_w = g.stringWidth(info.text.toString());
  // gap between image and text
  var gap = 10;
  // width of the image and text combined
  var w = gap + (info.img ? 24 :0) + text_w;
  // different fg color if we tapped on the menu
  if (options.focus) g.setColor(options.hl);

  // clear the whole info line, allow additional 2 pixels in case LatoFont overflows area
  g.clearRect(0, options.y -2, g.getWidth(), options.y+ 23 + 2);

  // draw the image if we have one
  if (info.img) {
    // image start
    var x = (g.getWidth() / 2) - (w/2);
    g.drawImage(info.img, x, options.y);
    // draw the text to the side of the image (left/centre alignment)
    g.setFontAlign(-1,0).drawString(info.text, x + 23 + gap, options.y+12);
  } else {
    // text only option, not tested yet
    g.setFontAlign(0,0).drawString(info.text, g.getWidth() / 2, options.y+12);
  }
}

// clock_info_support
// retrieve all the clock_info modules that are installed
let clockInfoItems = require("clock_info").load();

/**
 * clock_info_support: setup the way we wish to interact with the menu
 * the hl property defines the color the of the info when the menu is
 * selected after tapping on it
 *
 */
let clockInfoMenu = require("clock_info").addInteractive(clockInfoItems, { x:64, y:132, w:50, h:40, draw : clockInfoDraw, bg : g.theme.bg, fg : g.theme.fg, hl : "#0ff"} );
  
g.clear();

// Show launcher when middle button pressed
Bangle.setUI("clock");
Bangle.loadWidgets();
Bangle.drawWidgets();
draw();
