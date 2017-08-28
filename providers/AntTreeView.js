"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vsc = require("vscode");
const path = require("path");
let DOMParser = require("xmldom").DOMParser;
var targets = {};

class AntTreeViewDataProvider {
    constructor(_context) {
        this._context = _context;

        this._onDidChangeTreeData = new vsc.EventEmitter();
        this.onDidChangeTreeData = this._onDidChangeTreeData.event;
        vsc.window.onDidChangeActiveTextEditor(() => {
            this._refreshTree();
        });
        vsc.workspace.onDidChangeTextDocument(() => {
            this._refreshTree();
        });
    }
    get activeEditor() {
        return vsc.window.activeTextEditor || null;
    }
    getChildren(element) {
        if (!this._xmlDocument) {
            this._refreshTree();
        }
        if (element) {
            return [].concat(this._getChildElementArray(element));
        }
        else if (this._xmlDocument) {
            return [this._xmlDocument.lastChild];
        }
        else {
            return [];
        }
    }
    getTreeItem(element) {
        let treeItem = new vsc.TreeItem(targets[element]);
        if (this._getChildElementArray(element).length > 0){
            if (element.nodeName == 'project')
                treeItem.collapsibleState = vsc.TreeItemCollapsibleState.Expanded;
            else if (element.nodeName == 'target')
                treeItem.collapsibleState = vsc.TreeItemCollapsibleState.Collapsed;
        }
        treeItem.command = {
            command: "revealLine",
            title: "",
            arguments: [{
                lineNumber: element.lineNumber - 1,
                at: "top"
            }]
        };
        treeItem.iconPath = this._getIcon(element);
        return treeItem;
    }
    _getChildAttributeArray(node) {
        if (!node.attributes) {
            return [];
        }
        let array = new Array();
        for (let i = 0; i < node.attributes.length; i++) {
            array.push(node.attributes[i]);
        }
        return array;
    }

    _getChildElementArray(node) {
        if (!node.childNodes) {
            return [];
        }
        var array = new Array();
        if (node.nodeName == 'project')
            targets[node] = node.getAttribute('name');
        for (let i = 0; i < node.childNodes.length; i++) {
            let child = node.childNodes[i];
            if (child.nodeName == "target" && child.getAttribute('name') != "") {
                targets[child] = child.getAttribute('name');
                array.push(child);
            }
            else if (child.nodeName == "antcall" && child.getAttribute('target') != null) {
                targets[child] = child.getAttribute('target');
                array.push(child);
            }
        }
        return array;
    }

    _getIcon(element) {
        let type = "target";
        if (element.nodeName == 'antcall')
            type = "antcall";
        else if (element.nodeName == 'project')
            type = "ant";
        let icon = {
            dark: this._context.asAbsolutePath(path.join("resources", "icons", `${type}.dark.svg`)),
            light: this._context.asAbsolutePath(path.join("resources", "icons", `${type}.light.svg`))
        };
        return icon;
    }
    _refreshTree() {
        if (!this.activeEditor || this.activeEditor.document.languageId !== "xml") {
            this._xmlDocument = null;
            this._onDidChangeTreeData.fire();
            return;
        }
        let xml = this.activeEditor.document.getText();
        this._xmlDocument = new DOMParser().parseFromString(xml, "text/xml");
        this._onDidChangeTreeData.fire();
    }
}
exports.AntTreeViewDataProvider = AntTreeViewDataProvider;
