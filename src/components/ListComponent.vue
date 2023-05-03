<template>
    <main>
        <div class="row">
            <div class="col-md-12">
                <h3 class="text-center">Reservation Status</h3>
                <table class="table table-striped">
                    <thead class="thead-dark">
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Address</th>
                            <th>Contact Number</th>
                            <th>Email Address</th>
                            <th>Destination</th>
                            <th>Departure Date</th>
                            <th>Student</th>
                            <th>Senior Citizen</th>
                            <th>Trip Value</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="passenger in Passengers" :key="passenger._id">
                            <td>{{ passenger.firstName }}</td>
                            <td>{{ passenger.lastName }}</td>
                            <td>{{ passenger.address }}</td>
                            <td>{{ passenger.contactNumber }}</td>
                            <td>{{ passenger.emailAddress }}</td>
                            <td>{{ passenger.destination }}</td>
                            <td>{{ passenger.departureDate }}</td>
                            <td>{{ passenger.isStudent }}</td>
                            <td>{{ passenger.isSeniorCitizen }}</td>
                            <td>{{ passenger.tripValue }}</td>
                            <td>
                                <router-link :to="{ name: 'edit', params: { id: passenger._id } }"
                                    class="btn btn-success">Edit
                                </router-link>
                                <button @click.prevent="deletePassenger(passenger._id)"
                                    class="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </main>
</template>
  
<script>
import axios from "axios";
export default {
    data() {
        return {
            Passengers: []
        }
    },
    created() {
        let apiURL = 'http://localhost:4000/api';
        axios.get(apiURL).then(res => {
            this.Passengers = res.data;
        }).catch(error => {
            console.log(error)
        });
    },
    methods: {
        deletePassenger(id) {
            let apiURL = `http://localhost:4000/api/delete-passenger/${id}`;
            let indexOfArrayItem = this.Passengers.findIndex(i => i._id === id);
            if (window.confirm("Do you really want to delete?")) {
                axios.delete(apiURL).then(() => {
                    this.Passengers.splice(indexOfArrayItem, 1);
                }).catch(error => {
                    console.log(error)
                });
            }
        }
    }
}
</script>
  
<style>
.btn-success {
    margin-right: 10px;
}
</style>

<style>
main{
    min-height: 100vh;
}
</style>
  