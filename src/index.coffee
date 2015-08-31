###*
 * @version 1.1.0
 * @module mcore
 * @author vfasky <vfasky@gmail.com>
###
define 'mcore',
['mcore/util', 'mcore/template', 'mcore/view', 'mcore/route', 'mcore/ui', 'mcore/app'],
(util, Template, View, Route, Ui, App)->
    
    "use strict"

    exports =
        util: util
        Template: Template
        View: View
        Route: Route
        Ui: Ui
        App: app

    exports

