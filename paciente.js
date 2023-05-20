document.addEventListener("DOMContentLoaded", function() {
    // Simulando datos del paciente
    var paciente = {
      nombre: "Isabel Cordova",
      edad: 56,
      condicion: "Diabetes tipo 2",
      historial: "El paciente ha sido diagnosticado con diabetes tipo 2 desde hace 14 años. Actualmente, su nivel de glucosa en sangre es inestable y requiere un mayor control. Además, se han observado complicaciones en los riñones y en la vista. Se encuentra siguiendo un plan de dieta y tomando medicamentos recetados para controlar su condición. Se recomienda un monitoreo constante y visitas regulares al médico.",
      antecedentesclinicos:"Diabetes Tipo 2 diagnosticada hace aproximadamente 14 años en tratamiento con Insulina NPH 16 UI en la mañana (8:00 am) y 22 UI en la noche (20:00pm). Hospitalizado por 4 ocasiones en el 2014 por Diabetes tipo 2 descompensada. Retinopatía Diabética Grado 3 (No proliferativa Moderada) diagnosticada hace aproximadamente 2 años. No refiere alergias. Sin antecedentes quirúrgicos de importancia."

    };
  
    // Crear el resumen ejecutivo
    var resumenContainer = document.getElementById("resumen-container");
  
    var resumen = document.createElement("div");
    resumen.classList.add("card");
  
    var resumenBody = document.createElement("div");
    resumenBody.classList.add("card-body");
  
    var nombre = document.createElement("h5");
    nombre.classList.add("card-title");
    nombre.textContent = "Nombre del paciente: " + paciente.nombre;
  
    var edad = document.createElement("p");
    edad.classList.add("card-text");
    edad.textContent = "Edad: " + paciente.edad + " años";
  
    var condicion = document.createElement("p");
    condicion.classList.add("card-text");
    condicion.textContent = "Condición: " + paciente.condicion;
  
    var historial = document.createElement("p");
    historial.classList.add("card-text");
    historial.textContent = "Historial: " + paciente.historial;

    var antecedentesclinicos =document.createElement("p");
    antecedentesclinicos.classList.add("card-text");
    antecedentesclinicos.textContent = "Antecedentes Clinicos: " + paciente.antecedentesclinicos;
  
    resumenBody.appendChild(nombre);
    resumenBody.appendChild(edad);
    resumenBody.appendChild(condicion);
    resumenBody.appendChild(historial);
    resumenBody.appendChild(antecedentesclinicos);
  
    resumen.appendChild(resumenBody);
  
    resumenContainer.appendChild(resumen);
  });
  