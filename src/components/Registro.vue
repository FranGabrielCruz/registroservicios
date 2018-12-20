<template>
<div class="contenedor">
    <barra-menu></barra-menu>
    <article class="contenido">
        <form action="">
            <div class="container ">
                <div class="row ">
                    <div class="col-md-6 col-lg-4 col-xl-4 col-sm-12 form-group">
                        <div class="input-group col-lg-12">
                            <div class="input-group-prepend">
                                <div title="Cliente" class="input-group-text"><i class="fas fa-user-tag"></i></div>
                            </div>
                            <select  class="form-control col-xl-12 col-md-12"
                                id="cliente" placeholder="Cliente">
                                       <option value="" selected="selected">Seleccione Un Cliente</option>
                                                </select>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4 col-xl-4 col-sm-12 form-group">
                        <div class="input-group col-lg-12">
                            <div class="input-group-prepend">
                                <div title="Ip servidor" class="input-group-text"><i class="fas fa-desktop"></i></div>
                            </div>
                            <input type="text" v-model="ipservidor" class="form-control col-xl-12 col-md-12"
                                id="ip" placeholder="Ip Servidor">
                        </div>
                        </div>
                        <div class="col-md-6 col-lg-4 col-xl-4 col-sm-12 form-group">
                            <div class="input-group col-lg-12">
                                <div class="input-group-prepend">
                                    <div title="Base de Datos" class="input-group-text"><i class="fas fa-database"></i></div>
                                </div>
                                <input type="text" v-model="basedatos" class="form-control col-xl-12 col-md-12"
                                id="base" placeholder="Base de Datos">
                        </div>
                            </div>
                            <div class="col-md-6 col-lg-4 col-xl-4 col-sm-12 form-group">
                                <div class="input-group col-lg-12">
                                    <div class="input-group-prepend">
                                        <div title="Payara user" class="input-group-text"><i class="fas fa-fish"></i></div>
                                    </div>
                                    <input type="text" v-model="payarauser" class="form-control col-xl-12 col-md-12"
                                id="Payara" placeholder="Payara User">
                        </div>
                                </div>
                                <div class="col-md-6 col-lg-4 col-xl-4 col-sm-12 form-group">
                                    <div class="input-group col-lg-12">
                                        <div class="input-group-prepend">
                                            <div title="Postgres pass" class="input-group-text"><i class="fas fa-asterisk"></i></div>
                                        </div>
                                        <input type="text" v-model="payarapas" class="form-control col-xl-12 col-md-12"
                                id="post" placeholder="Postgres Pass">
                        </div>
                                    </div>
                                    <div class="col-md-6 col-lg-4 col-xl-4 col-sm-12 form-group">
                                        <div class="input-group col-lg-12">
                                            <div class="input-group-prepend">
                                                <div title="Postgres Pass" class="input-group-text"><i class="fas fa-asterisk"></i></div>
                                            </div>
                                            <input type="text" v-model="postgrespass" class="form-control col-xl-12 col-md-12"
                                id="postpas" placeholder="Postgres Pass">
                        </div>
                                        </div>
                                        <div class="col-md-6 col-lg-4 col-xl-4 col-sm-12 form-group">
                                            <div class="input-group col-lg-12">
                                                <div class="input-group-prepend">
                                                    <div title="Comentario" class="input-group-text"><i class="fas fa-wind"></i></div>
                                                </div>
                                                <select  class="form-control col-xl-12 col-md-12"
                                id="cliente" placeholder="Tipo de Sistema">
                                       <option value="" selected="selected">Tipo de Sistema</option>
                                        </select>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-lg-4 col-xl-4 col-sm-12  form-group">
                                            <div class="input-group col-lg-12">
                                                <div class="input-group-prepend">
                                                    <div title="Comentario" class="input-group-text"><i class="fas fa-comment"></i></div>
                                                </div>
                                                <textarea rows="2" v-model="comentario"  class="form-control col-xl-12 col-md-12"
                                id="com" placeholder="Comentario"></textarea>
                                            </div>
                                        </div>
                                        <div class="col-md-12 col-lg-12 col-xl-12 col-sm-12  form-group">
                                            Usuarios
                                            <table class="table">
                                                <thead class="cab-col col">
                                                    <tr>
                                                        <th scope="col">Tipo</th>
                                                        <th scope="col">Usuario</th>
                                                        <th scope="col">Password</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">1</th>
                                                        <td>Mark</td>
                                                        <td>Otto</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">2</th>
                                                        <td>Jacob</td>
                                                        <td>Thornton</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">3</th>
                                                        <td>Larry</td>
                                                        <td>the Bird</td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                        </div>
                                       <div class="col-md-12 col-lg-12 col-xl-12 col-sm-12  form-group">
                                            Acceso Remoto
                                            <table class="table">
                                                <thead class="cab-col col">
                                                    <tr>
                                                        <th scope="col">Usuario</th>
                                                        <th scope="col">Aplicacion Remota</th>
                                                        <th scope="col">Password</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">1</th>
                                                        <td>Mark</td>
                                                        <td>Otto</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">2</th>
                                                        <td>Jacob</td>
                                                        <td>Thornton</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">3</th>
                                                        <td>Larry</td>
                                                        <td>the Bird</td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                        </div>
                                    </div>
                                </div>
        </form>
    </article>
    <barra-busqueda></barra-busqueda>
    <barra-foot></barra-foot>

</div>
</template>

<script>
export default {
    data: function () {
        return {
            cliente: '',
            ipservidor: '',
            basedatos: '',
            payarauser: '',
            payarapas : '',
            postgrespass: '',
            tiposistema: '',
            comentario: ''
        };
    }
}
</script>

<style>
.cab-col{
background-color: #1e2d6c;
}
.col{
color: #fff;
}

</style>
