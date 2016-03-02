###*
# 分页条
# @author vfasky <vfasky@gmail.com>
# @link http://vfasky.com
###
'use strict'

{Template, Component} = require 'mcoreapp'
$ = require 'jquery'

class Pagination extends Component
    init: ->
        @render require('./tpl/pagination.html'),
            pageInfo:
                totalPage: 0


    changePage: ->
        @emitEvent 'change-page', arguments
        false

    watch: ->
        @on 'change:page-info', (pageInfo)=>
            pageInfo =
                currentPage: parseInt pageInfo.currentPage or 1
                totalPage: parseInt pageInfo.totalPage or 1
                maxPage: parseInt pageInfo.maxPage or 10

            @set 'prevPage', pageInfo.currentPage - 1
            @set 'nextPage', pageInfo.currentPage + 1

            pages = []

            # 小于等于最大显示页数
            if pageInfo.totalPage <= pageInfo.maxPage
                for v in [1...(pageInfo.totalPage + 1)]
                    pages.push
                        cur: v == pageInfo.currentPage
                        page: v

            else

                pages.push
                    cur: pageInfo.currentPage == 1
                    page: 1

                # 插入过渡
                if pageInfo.currentPage > (pageInfo.maxPage / 2 + 1)
                    pages.push
                        cur: false
                        page: false


                step = (pageInfo.maxPage / 2) - 1

                start = pageInfo.currentPage - step
                end = pageInfo.currentPage + step

                start = 2 if start < 2
                end = pageInfo.totalPage - 1 if end > pageInfo.totalPage - 1
                end = pageInfo.maxPage - 1 if end < pageInfo.maxPage - 1

                if (end - start) <= step
                    start = start - (step - (pageInfo.totalPage - end))

                for v in [start ...(end + 1)]
                    pages.push
                        cur: v == pageInfo.currentPage
                        page: v


                # 插入过渡
                if pageInfo.currentPage < pageInfo.totalPage - (pageInfo.maxPage / 2)
                    pages.push
                        cur: false
                        page: false

                pages.push
                    cur: pageInfo.totalPage == pageInfo.currentPage
                    page: pageInfo.totalPage


            @set 'pages', pages
            @set 'pageInfo', pageInfo


Template.components['pagination'] = Pagination

module.exports = Pagination
