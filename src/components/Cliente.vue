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
                                <div title="Nombre" class="input-group-text"><i class="fas fa-user-tag"></i></div>
                            </div>
                            <input type="text"  v-model="nombre" class="form-control col-xl-12 col-md-12" 
                                id="nom" placeholder="Nombre">
                        </div>
                        </div>
                    <div class="col-md-6 col-lg-4 col-xl-4 col-sm-12 form-group">
                        <div class="input-group col-lg-12">
                            <div class="input-group-prepend">
                                <div title="Cedula/Rnc"  class="input-group-text"><i class="fas fa-id-card"></i></div>
                            </div>
                            <input type="text" v-model="cedula_rnc" class="form-control col-xl-12 col-md-12" 
                                id="ced" placeholder="Cedula/Rnc">
                        </div>
                        </div>
                    <div class="col-md-6 col-lg-4 col-xl-4 col-sm-12 form-group">
                        <div class="input-group col-lg-12">
                            <div class="input-group-prepend">
                                <div title="Ciudad" class="input-group-text"><i class="fas fa-city"></i></div>
                            </div>
                            <input type="text" v-model="ciudad" class="form-control col-xl-12 col-md-12" 
                                id="ciu" placeholder="Ciudad">
                        </div>
                        </div>
                         <div class="col-md-6 col-lg-4 col-xl-4 col-sm-12 form-group">
                        <div class="input-group col-lg-12">
                            <div class="input-group-prepend">
                                <div title="Email" class="input-group-text"><i class="fas fa-envelope"></i></div>
                            </div>
                            <input type="text" v-model="email" class="form-control col-xl-12 col-md-12" 
                                id="ema" placeholder="Email">
                        </div>
                        </div>
                    <div class="col-md-6 col-lg-4 col-xl-4 col-sm-12 form-group">
                        <div class="input-group col-lg-12">
                            <div class="input-group-prepend">
                                <div title="Telefono" class="input-group-text"><i class="fas fa-phone"></i></div>
                            </div>
                            <input type="text" v-model="telefono" class="form-control col-xl-12 col-md-12" 
                                id="tel" placeholder="Telefono">
                        </div>
                        </div>
                    <div class="col-md-6 col-lg-4 col-xl-4 col-sm-12 form-group">
                        <div class="input-group col-lg-12">
                            <div class="input-group-prepend">
                                <div title="Direccion" class="input-group-text"><i class="fas fa-directions"></i></div>
                            </div>
                            <textarea rows="2" v-model="direccion"  class="form-control col-xl-12 col-md-12" 
                                id="dir" placeholder="Direccion"></textarea>
                        </div>
                        </div>
                            <div class="col-md-6 col-lg-4 col-xl-4 col-sm-12 form-group">
                        <div class="input-group col-lg-12">
                            <div class="input-group-prepend">
                                <div title="Comentario" class="input-group-text"><i class="fas fa-comment"></i></div>
                            </div>
                            <textarea rows="2" v-model="comentario"  class="form-control col-xl-12 col-md-12"
                                id="com" placeholder="Comentario"></textarea>
                        </div>
                        </div>
                    <div class="col-md-6 col-lg-4 col-xl-4 col-sm-12  form-group">
                        <div class="input-group col-lg-12">
                            <div class="input-group-prepend">
                               <label for="ck">Status</label>
                            </div>
                            <input type="checkbox" v-model="status" class="form-control col-xl-4 col-md-4" 
                                id="ck">
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
   data: function() {
        return{
            nombre:'',
            cedula_rnc:'',
            ciudad:'',
            email:'',
            telefono:'',
            direccion:'',
            comentario:'',
            status:''
        };
    }
}
</script>
