'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const vsc = require("vscode");
const XmlTreeView = require("./providers/XmlTreeView");
function activate(ctx) {
    exports.GlobalState = ctx.globalState;
    exports.WorkspaceState = ctx.workspaceState;
    ctx.subscriptions.push(vsc.window.onDidChangeActiveTextEditor(_handleChangeActiveTextEditor), vsc.window.onDidChangeTextEditorSelection(_handleChangeTextEditorSelection));
    ctx.subscriptions.push(vsc.window.registerTreeDataProvider("xmlTreeView", new XmlTreeView.XmlTreeViewDataProvider(ctx)));
}
exports.activate = activate;
function _handleContextChange(editor) {
    if (!editor || !editor.document) {
        return;
    }
}
function _handleChangeActiveTextEditor(editor) {
    _handleContextChange(editor);
}
function _handleChangeTextEditorSelection(e) {
    _handleContextChange(e.textEditor);
}
