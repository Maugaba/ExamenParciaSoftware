<template>
    <div class="main-wrapper">
        <layout-header></layout-header>
        <layout-sidebar></layout-sidebar>
        <!-- Page Wrapper -->
        <div class="page-wrapper">
            <div class="content container-fluid">
                <div class="page-header">
                    <div class="row align-items-center">
                        <div class="col">
                            <h3 class="page-title">Alumnos</h3>
                            <ul class="breadcrumb">
                                <li class="breadcrumb-item"><router-link to="/index">Dashboard</router-link></li>
                                <li class="breadcrumb-item active">Users</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                      <div class="card card-table">
                          <div class="card-header d-flex justify-content-between">
                              <h4 class="card-title">Lista de alumnos</h4>
                              <button class="btn btn-primary mt-auto" data-bs-container="body"  data-toggle="modal" data-target="#create_alumn">Nuevo</button>
                          </div>
                              <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table table-hover table-center mb-0">
                                        <thead>
                                            <tr>
                                                <th>Nombres</th>
                                                <th>Apellidos</th>
                                                <th>Sede</th>
                                                <th>Carrera</th>
                                                <th>Semestre</th>
                                                <th>Carne</th>
                                                <th >Acciones</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="datos in datosPosts" :key="datos.id">
                                                <td v-text="datos.nombres"></td>
                                                <td v-text="datos.apellidos"></td>
                                                <td v-text="datos.sede"></td>
                                                <td v-text="datos.carrera"></td>
                                                <td v-text="datos.semestre"></td>
                                                <td v-text="datos.carne"></td>
                                                <td>
                                                    <button  @click="openModal('update', datos.id)" data-bs-container="body"  data-toggle="modal" data-target="#edit_alumn">Editar</button>
                                                    <button @click="openModal('delete', datos.id)" data-bs-container="body"  data-toggle="modal" data-target="#delete_alumn">Eliminar</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <!-- /Page Wrapper -->
        <!-- ModalCreate -->
        <div id="create_alumn" class="modal fade delete-modal" role="dialog">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body text-center">
                        <h3>Crear Alumno</h3>
                        <form>
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label>Nombres<span class="text-danger">*</span></label>
                                        <input class="form-control" type="text" name="name" v-model="form.nombres">
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label>Apellidos<span class="text-danger">*</span></label>
                                        <input class="form-control" type="text" name="lastname" v-model="form.apellidos">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label>Sede<span class="text-danger">*</span></label>
                                        <input class="form-control" type="text" name="sede" v-model="form.sede">
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label>Carrera<span class="text-danger">*</span></label>
                                        <input class="form-control" type="text" name="carrera" v-model="form.carrera">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label>Semestre<span class="text-danger">*</span></label>
                                        <input class="form-control" type="text" name="semestre" v-model="form.semestre">
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label>Carne<span class="text-danger">*</span></label>
                                        <input class="form-control" type="text" name="carne" v-model="form.carne">
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div class="m-t-20">
                            <button @click="onSave()" data-dismiss="modal" class="btn btn-primary">Crear</button>
                            <a href="javascript:;" class="btn btn-white" data-dismiss="modal">Cerrar</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- /ModalCreate -->
        <!-- ModalEdit -->
        <div id="edit_alumn" class="modal fade delete-modal" role="dialog">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body text-center">
                        <h3>Editar Alumno</h3>
                        <form>
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label>Nombres<span class="text-danger">*</span></label>
                                        <input class="form-control" type="text" name="name" v-model="form.nombres">
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label>Apellidos<span class="text-danger">*</span></label>
                                        <input class="form-control" type="text" name="lastname" v-model="form.apellidos">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label>Sede<span class="text-danger">*</span></label>
                                        <input class="form-control" type="text" name="sede" v-model="form.sede">
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label>Carrera<span class="text-danger">*</span></label>
                                        <input class="form-control" type="text" name="carrera" v-model="form.carrera">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label>Semestre<span class="text-danger">*</span></label>
                                        <input class="form-control" type="text" name="semestre" v-model="form.semestre">
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label>Carne<span class="text-danger">*</span></label>
                                        <input class="form-control" type="text" name="carne" v-model="form.carne">
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div class="m-t-20">
                            <button @click="onState()" data-dismiss="modal" class="btn btn-primary">Editar</button>
                            <a href="javascript:;" class="btn btn-white" data-dismiss="modal">Cerrar</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- /ModalEdit -->
        <!-- ModalDelete -->
        <div id="delete_alumn" class="modal fade delete-modal" role="dialog">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="modal-body text-center">
						<h3>¿Estás seguro de que quieres borrar este alumno:</h3>
                        <h3 class="text-danger">{{ form.nombres }}</h3>
						<div class="m-t-20"> <a href="javascript;:" class="btn btn-white" data-dismiss="modal">Cerrar</a>
							&nbsp;<button @click="DeleteData()" data-dismiss="modal" class="btn btn-danger">Borrar</button>
						</div>
					</div>
				</div>
			</div>
		</div>
        <!-- /ModalDelete -->
    </div>
</template>
<script>
import { laravelUrl } from '../../config/constant'
import axios from 'axios'
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
export default {
  name: 'Alumnos',
  components: {
  },
  setup () {
    
  },
  mounted () {
    this.getDatos()
  },
  beforeDestroy () {
    this.mensajeDespedida()
  },
  beforeMount () {
    console.log('Aqui empieza el componente')
  },
  data () {
    return {
      from: 0,
      to: 0,
      total: 0,
      perPage: 5,
      search: '',
      datosPosts: [],
      form: {
        id: 0,
        nombres: '',    
        apellidos: '',    
        sede: '',       
        carrera: '',     
        semestre: '',    
        carne: ''         
      },
      apiBase: laravelUrl + '/alumnos/getTodos',
    }
  },
  validations () {
    return {
      form: {
        nombres: { required },
        apellidos: { required },
        sede: { required },
        carrera: { required },
        semestre: { required },
        carne: { required }
      }
    }
  },
  methods: {
    getDatos() {
    axios.get(laravelUrl + '/alumnos/getTodos').then((response) => {
        this.datosPosts = response.data;
        
        // Filtra los datos para mostrar solo aquellos con estado 1
        this.datosPosts = this.datosPosts.filter((alumno) => alumno.estado === 1);
        
        console.log(this.datosPosts);
    });
    },
    openModal (modal, id) {
      switch (modal) {
        case 'save': {
          this.$v.$reset()
          this.form.id = 0
          this.form.nombres = ''
          this.form.apellidos = ''
          this.form.sede = ''
          this.form.carrera = ''
          this.form.semestre = ''
          this.form.carne = ''
          break
        }
        case 'update': {
          const datoAEditar = this.datosPosts.find(dato => dato.id === id)
          if (datoAEditar) {
            this.form.id = datoAEditar.id
            this.form.nombres = datoAEditar.nombres
            this.form.apellidos = datoAEditar.apellidos
            this.form.sede = datoAEditar.sede
            this.form.carrera = datoAEditar.carrera
            this.form.semestre = datoAEditar.semestre
            this.form.carne = datoAEditar.carne
          }
          break
        }
        case 'delete': {
          const datoAEliminar = this.datosPosts.find(dato => dato.id === id)
          if (datoAEliminar) {
            this.form.id = datoAEliminar.id
            this.form.nombres = datoAEliminar.nombres
          }
          break
        }
      }
    },
    closeModal (action) {
      switch (action) {
        case 'save': {
          this.$v.$reset()
          this.$refs['modal-1'].hide()
          this.form.id = 0
          this.form.nombre = ''
          this.form.universidad = ''
          this.form.carrera = ''
          break
        }
        case 'update': {
          this.$v.$reset()
          this.$refs['modal-2'].hide()
          this.form.id = 0
          this.form.nombre = ''
          this.form.universidad = ''
          this.form.carrera = ''
          break
        }
      }
    },
    onValidate (action) {
      this.$v.$touch()
      if (this.$v.$error !== true) {
        if (action === 'save') {
          this.onSave()
        } else if (action === 'update') {
          this.onState()
        }
      }
    },
    setData (data) {
      this.form.user = data.user
      this.form.state = data.estado
      this.form.id = data.id
    },
    /* Guardar */
    onSave () {
      const me = this
      axios.post(laravelUrl + '/alumnos/', {
        nombres: me.form.nombres,
        apellidos: me.form.apellidos,
        sede: me.form.sede,
        carrera: me.form.carrera,
        semestre: me.form.semestre,
        carne: me.form.carne})
        .then((response) => {
          me.getDatos()
        })
        .catch((error) => {
          // this.errorMessage = error.message;
          console.error('Error!', error)
        })
    },
    /* Guardar */
    onUpdate () {
      const me = this
      axios.put(apiUrl + '/user/update', {
        form: me.form })
        .then((response) => {
          me.closeModal('update')
        })
        .catch((error) => {
          // this.errorMessage = error.message;
          console.error('Error!', error)
        })
    },
    onState () {
      const me = this
      axios.put(laravelUrl + '/alumnos/' + this.form.id, {
        nombres: me.form.nombres,
        apellidos: me.form.apellidos,
        sede: me.form.sede,
        carrera: me.form.carrera,
        semestre: me.form.semestre,
        carne: me.form.carne})
        .then((response) => {
          me.getDatos()
        })
        .catch((error) => {
          // this.errorMessage = error.message;
          console.error('Error!', error)
        })
    },
    DeleteData () {
      const me = this
      axios.put(laravelUrl + '/alumnos/state/' + this.form.id, {
        Estado: 0
      })
        .then((response) => {
          me.getDatos()
        })
        .catch((error) => {
        // this.errorMessage = error.message;
          console.error('Error!', error)
        })
    },
    makeQueryParams (sortOrder, currentPage, perPage) {
      return sortOrder[0]
        ? {
          criterio: sortOrder[0] ? sortOrder[0].sortField : 'createdAt',
          order: sortOrder[0] ? sortOrder[0].direction : 'desc',
          page: currentPage,
          limit: this.perPage,
          search: this.search,
          columna: this.columna.value
        }
        : {
          criterio: sortOrder[0] ? sortOrder[0].sortField : 'createdAt',
          order: sortOrder[0] ? sortOrder[0].direction : 'desc',
          page: currentPage,
          limit: this.perPage,
          search: this.search,
          columna: this.columna.value
        }
    },
    changePageSizes (perPage) {
      this.perPage = perPage
      this.$refs.vuetable.refresh()
    },
    searchChange (val) {
      this.search = val.toLowerCase()
      this.$refs.vuetable.refresh()
    },
    onPaginationData (paginationData) {
      this.from = paginationData.from
      this.to = paginationData.to
      this.total = paginationData.total
      this.lastPage = paginationData.last_page
      this.items = paginationData.data
      this.$refs.pagination.setPaginationData(paginationData)
    },
    onChangePage (page) {
      this.$refs.vuetable.changePage(page)
    },
    changeTypeSearch (columna) {
      this.columna = columna
    },
    mensaje (mensaje) {
      this.form.mensaje = mensaje
    },
    mensajeDespedida () {
      console.log('Antes de irnos del componente manda este mensaje')
    }
  }
}
</script>
