//Agenda

let agenda={
    nombre: "Adrián",
    tareas: [],
    agregarTarea: function(descripcion, prioridad){
        let tarea={
            descripcion: descripcion,   //Hay que poner a cada variable lo que se pasa por parámetros para que no salga siempre lo que esta por defecto
            prioridad: prioridad,
            estado: "Pendiente"
        };

        this.tareas.push(tarea);
    },
    listarTareas: function(){
        agenda.tareas.forEach(tarea => {
            console.log("Descripción: "+tarea.descripcion);
            console.log("Prioridades: "+tarea.prioridad);
            console.log("Estado: "+tarea.estado);
            console.log(" ");
        });
    },
    marcarCompletada: function(indice){
        agenda.tareas.forEach((tarea,i) => {
            if((indice-1)==i){
                tarea.estado="Completada";
            }
        });
    },
    eliminarTarea: function(indice){
        agenda.tareas.forEach((tarea,i) => {
            if((indice-1)==i){
                this.tareas.splice(i,1);    //Hay que seleccionar el array, si pongo tarea. etc me da error porque esta seleccionado el objeto
            }
        });
    },
    listarPendientes: function(){
        agenda.tareas.forEach(tarea => {
            if(tarea.estado=="Pendiente"){
                console.log("Descripción: "+tarea.descripcion);
                console.log("Prioridades: "+tarea.prioridad);
                console.log(" ");
            }
        });
    },
    ordenarPorPrioridad: function(){
        agenda.tareas.sort((a, b) => a.prioridad - b.prioridad) //Ordena alfabéticamente, pero poniendo parámetros puede ordenar números

        agenda.listarTareas();
    }
};

agenda.agregarTarea("Tareas Despliegue", 3);
agenda.agregarTarea("Tareas Java", 1);
agenda.agregarTarea("Tareas Servidor", 2);

agenda.listarTareas();

agenda.ordenarPorPrioridad();

agenda.marcarCompletada(1);

agenda.listarTareas();

agenda.listarPendientes();

agenda.eliminarTarea(1);

agenda.listarTareas();