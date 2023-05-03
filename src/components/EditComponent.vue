<template>
    <main>
        <div class="row justify-content-center">
            <div class="col-md-6">
                <h3 class="text-center">Reserve</h3>
                <form @submit.prevent="handleSubmitForm">
                    <div class="form-group">
                        <label for="firstName">First Name</label>
                        <input type="text" class="form-control" id="firstName" v-model="passenger.firstName" required>
                    </div>
                    <div class="form-group">
                        <label for="lastName">Last Name</label>
                        <input type="text" class="form-control" id="lastName" v-model="passenger.lastName" required>
                    </div>
                    <div class="form-group">
                        <label for="address">Address</label>
                        <input type="text" class="form-control" id="address" v-model="passenger.address" required>
                    </div>
                    <div class="form-group">
                        <label for="contactNumber">Contact Number</label>
                        <input type="text" class="form-control" id="contactNumber" v-model="passenger.contactNumber"
                            required>
                    </div>
                    <div class="form-group">
                        <label for="emailAddress">Email Address</label>
                        <input type="email" class="form-control" id="emailAddress" v-model="passenger.emailAddress"
                            required>
                    </div>
                    <!-- <div class="form-group">
                        <label for="destination">Destination</label>
                        <select class="form-control" id="destination" v-model="passenger.destination" required>
                            <option v-for="destination in destinations" :value="destination.name">{{ destination.name }}
                            </option>
                        </select>
                    </div> -->
                    <div class="form-group">
                        <label for="departureDate">Departure Date</label>
                        <input type="datetime-local" class="form-control" id="departureDate"
                            v-model="passenger.departureDate" required>
                    </div>
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="isStudent" v-model="passenger.isStudent">
                        <label class="form-check-label" for="isStudent">Student</label>
                    </div>
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="isSeniorCitizen"
                            v-model="passenger.isSeniorCitizen">
                        <label class="form-check-label" for="isSeniorCitizen">Senior Citizen</label>
                    </div>
                    <div class="form-group">
                        <button class="btn btn-primary btn-block">Reserve</button>
                    </div>
                </form>
            </div>
        </div>
    </main>
</template>
<script>
import axios from "axios";
export default {
    data() {
        return {
            passenger: {},
            destinations: [],
        };
    },
    created() {
        let apiURL = `http://localhost:4000/api/edit-passenger/${this.$route.params.id}`;
        axios.get(apiURL).then((res) => {
            this.passenger = res.data;
        });
        this.destinations = JSON.parse(localStorage.getItem("destinations")) || [];
    },
    methods: {
        handleSubmitForm() {
            let apiURL = `http://localhost:4000/api/update-passenger/${this.$route.params.id}`;
            axios.put(apiURL, this.passenger).then((res) => {
                console.log(res)
                this.$router.push('/view')
            }).catch(error => {
                console.log(error)
            });
        }
    }
};
</script>
