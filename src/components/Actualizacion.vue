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
                                <div title="Fecha" class="input-group-text"><i class="fas fa-calendar-alt"></i></div>
                            </div>
                            <input type="Date"  v-model="fecha" class="form-control col-xl-12 col-md-12"
                                id="fecha" placeholder="Fecha">
                        </div>
                        </div>
                        <div class="col-md-6 col-lg-4 col-xl-4 col-sm-12 form-group">
                            <div class="input-group col-lg-12">
                                <div class="input-group-prepend">
                                    <div title="Version" class="input-group-text"><i class="fas fa-arrows-alt"></i></div>
                                </div>
                                <input type="text" v-model="version" class="form-control col-xl-12 col-md-12"
                                id="version" placeholder="Version">
                        </div>
                            </div>
                            <div class="col-md-6 col-lg-4 col-xl-4 col-sm-12 form-group">
                                <div class="input-group col-lg-12">
                                    <div class="input-group-prepend">
                                        <div title="Cliente" class="input-group-text"><i  class="fas fa-users"></i></div>
                                    </div>
                                    <select v-model="cliente" class="form-control col-xl-12 col-md-12"
                                id="cliente" placeholder="Cliente">
                                       <option value="" selected="selected">Seleccione Un Cliente</option>
                                                </select>
                                </div>
                            </div>
                            <div class="col-md-12 col-lg-12 col-xl-12 col-sm-12 form-group">
                                <div class="input-group col-lg-12">
                                    <div class="input-group-prepend">
                                        <div title="Comentario" class="input-group-text"><i class="fas fa-comment"></i></div>
                                    </div>
                                    <textarea rows="1" v-model="comentario"  class="form-control col-xl-12 col-md-12"
                                id="com" placeholder="Comentario"></textarea>
                                </div>
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
            fecha: "",
            version: "",
            cliente: "",
            comentario: ""
        };
    }
};
</script>
