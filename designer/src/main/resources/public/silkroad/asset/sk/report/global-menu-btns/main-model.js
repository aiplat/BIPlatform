define(["url"],function(a){return Backbone.Model.extend({initialize:function(){},getSkinType:function(b,c){$.ajax({url:a.getSkinType(b,c),type:"POST",success:function(){}})},editReportName:function(b){$.ajax({type:"GET",dataType:"json",cache:!1,timeout:1e4,url:a.editReportName(b),success:function(a){if(0===a.status){var b=a.data.name;$(".reportName").html(b)}}})}})});