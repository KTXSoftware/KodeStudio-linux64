// Generated by Haxe 4.0.0-preview.5+7eb789f54
(function ($hx_exports) { "use strict";
var Extension = function() { };
Extension.main = $hx_exports["activate"] = function(context) {
	Vscode.commands.registerCommand("hxcpp-debugger.setup",function() {
		var terminal = Vscode.window.createTerminal();
		terminal.sendText("haxelib dev hxcpp-debug-server " + context.asAbsolutePath("hxcpp-debug-server"));
		terminal.show();
	});
};
var Vscode = require("vscode");
})(typeof exports != "undefined" ? exports : typeof window != "undefined" ? window : typeof self != "undefined" ? self : this);