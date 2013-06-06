/**
 * User: 晓田(tancy)
 * Date: 13-6-6
 * Time: PM1:57
 */

$(function () {

    var accountMode= Backbone.Model.extend({
        url:"http://api.m.taobao.com/rest/h5ApiUpdate.do?callback=jsonp2&type=jsonp&ap_ref=http%3A%2F%2Fh5.m.taobao.com%2Fwe%2Findex.htm%3Fttid%3Dtaobao_h5_1.0.0%26sid%3D00fd1bcae587f7e2796d3734106d9f39%26spm%3D41.351606.292993.4%26sprefer%3Dpmm731%23detail%2F2015344098%2F8197624%2F1&api=mtop.sns.pubAccount.info&v=2.0&data=%7B%22snsId%22%3A%222015344098%22%7D&&ttid=taobao_h5_1.0.0&sprefer=pmm731&appKey=12574478&sign=adeef5c826e0275ab507db15129f0129&t=1370502940165"
    });

    var abc=new accountMode({'id':121212});
    abc.fetch();
    var detailView = Backbone.View.extend({
        el: $("#detailPage"),
        events: {},
        model:abc,
        initialize: function() {
            alert(2);
        },
        render: function() {
            alert(1);
        }


    });
    var app= new detailView;
});
