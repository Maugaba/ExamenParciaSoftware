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
                            <h3 class="page-title">Users</h3>
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
                              <h4 class="card-title">List of Users</h4>
                              <button class="btn btn-primary mt-auto">Nuevo ...</button>
                          </div>
                              <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table table-hover table-center mb-0">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Products</th>
                                                <th>Total Sales</th>
                                                <th>Created at</th>
                                                <th class="text-right">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <h2 class="table-avatar">
                                                    </h2>
                                                </td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td class="text-right">
                                                    <div class="actions">
                                                        <a href="#" class="btn btn-sm bg-success-light mr-2">
                                                            <i class="fe fe-pencil"></i> Edit
                                                        </a>
                                                        <a href="#" class="btn btn-sm bg-danger-light">
                                                            <i class="fe fe-trash"></i> Delete
                                                        </a>
                                                    </div>
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
        </div>
</template>
<script>
    import { laravelUrl } from '../../config/constant'
    import axios from 'axios'
    import useVuelidate from '@vuelidate/core'
    import { required } from '@vuelidate/validators'
    export default {
          mounted() {
      } ,
        data() {
            return {
            }
        },
        methods:{
        },
    }
    </script>
