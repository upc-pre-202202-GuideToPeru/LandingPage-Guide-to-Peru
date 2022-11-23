document.querySelector("#submit").addEventListener("click", e => {
    e.preventDefault();
  
    //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
    const telefono = "51950457066";
  
    const cliente = document.querySelector("#cliente").value;
    const apellidos = document.querySelector("#apellidos").value;
    const correo = document.querySelector("#correo").value;
    const fecha = document.querySelector("#fecha").value;
    const hora = document.querySelector("#hora").value;
    const mensaje = document.querySelector("#mensaje").value;
    const resp = document.querySelector("#respuesta");
  
    resp.classList.remove("fail");
    resp.classList.remove("send");
  
    const url = `https://api.whatsapp.com/send?phone=${telefono}&text=
          *_MI CONSULTA_*%0A
      Hola quisiera saber sobre las reservas, mi información es:
          *Nombre*%0A
          ${cliente}%0A
      *Apellidos*%0A
          ${apellidos}%0A
      *Correo Electrónico*%0A
          ${correo}%0A
          *Indica la fecha de tu reserva*%0A
          ${fecha}%0A
          *Indica la hora de tu reserva*%0A
          ${hora}%0A
          *Mensaje*%0A
          ${mensaje}%0A`;
  
    if (cliente === "" || apellidos === "" || correo === "" || fecha === "" || hora === "") {
      resp.classList.add("fail");
      resp.innerHTML = `Faltan algunos datos, ${cliente}`;
      return false;
    }
    resp.classList.remove("fail");
    resp.classList.add("send");
    resp.innerHTML = `Se ha enviado tu reserva, ${cliente}`;
  
    window.open(url);
  });
  