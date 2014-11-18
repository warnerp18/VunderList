;(function(window, undefined){

    window.app = window.app || {};

    var Todos = Backbone.Collection.extend({
        model: app.Todo
    })
    function addDelete (erase) {
    var element = document.createElement("input");
    	element.type = button;
    	element.value = remove;
    	element.id = "delete";
    	element.addEventListener("click", function () {
    		document.getElementById('todos');
    		delete('todos')

    	});
    }


    app.Todos = Todos;

})(window, undefined);