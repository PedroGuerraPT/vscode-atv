'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const vsc = require("vscode");
const AntTreeView = require("./providers/AntTreeView");
function activate(ctx) {
    exports.GlobalState = ctx.globalState;
    exports.WorkspaceState = ctx.workspaceState;
    ctx.subscriptions.push(vsc.window.onDidChangeActiveTextEditor(_handleChangeActiveTextEditor), vsc.window.onDidChangeTextEditorSelection(_handleChangeTextEditorSelection));
    ctx.subscriptions.push(vsc.window.registerTreeDataProvider("antTreeView", new AntTreeView.AntTreeViewDataProvider(ctx)));
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
