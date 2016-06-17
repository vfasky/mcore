###*
 *
 * ACL 访问控制
 * @author vfasky <vfasky@gmail.com>
###
'use strict'

module.exports = (LoginView, notLoginAllowViewNames = [], hasLogin = ->)->

    (err, next)->
        return next err if err

        # 在不需要登录的 view, 放行
        if @viewName in notLoginAllowViewNames
            return next()

        isLogin = hasLogin @

        # 已经登录，放行
        if isLogin == true or true == @view.__isReplaceLoginView
            return next()

        # 用 LoginView 替换当前的 view
        @view = new LoginView @view.$el, @app
        @app.curView.instantiate = @view
        @view.loginSuccessReload = true
        @view.__isReplaceLoginView = true
        next()
