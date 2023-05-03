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
                    <div class="form-group">
                        <label for="destination">Destination</label>
                        <select class="form-control" id="destination" v-model="passenger.destination" required>
                            <option v-for="destination in destinations" :value="destination.name">{{ destination.name }}
                            </option>
                        </select>
                    </div>
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
            passenger: {
                firstName: "",
                lastName: "",
                address: "",
                contactNumber: "",
                emailAddress: "",
                destination: "",
                departureDate: "",
                isStudent: false,
                isSeniorCitizen: false
            },
            destinations: [
                {
                    name: "Baguio",
                    tripValue: 360
                },
                {
                    name: "Laoag",
                    tripValue: 310
                },
                {
                    name: "Vigan",
                    tripValue: 390
                },
                {
                    name: "Manila",
                    tripValue: 190
                },
                {
                    name: "Dagupan",
                    tripValue: 350
                }
            ]
        }
    },
    methods: {
        handleSubmitForm() {
            let destination = this.destinations.find(
                (d) => d.name === this.passenger.destination
            );
            let tripValue = destination ? destination.tripValue : 0;

            if (this.passenger.isStudent) {
                tripValue *= 0.8; // apply 20% student discount
            } else if (this.passenger.isSeniorCitizen) {
                tripValue *= 0.8; // apply 20% senior citizen discount
            }

            let apiURL = "http://localhost:4000/api/create-passenger";
            let payload = {
                firstName: this.passenger.firstName,
                lastName: this.passenger.lastName,
                address: this.passenger.address,
                contactNumber: this.passenger.contactNumber,
                emailAddress: this.passenger.emailAddress,
                destination: this.passenger.destination,
                departureDate: this.passenger.departureDate,
                isStudent: this.passenger.isStudent,
                isSeniorCitizen: this.passenger.isSeniorCitizen,
                tripValue: tripValue
            };

            axios
                .post(apiURL, payload)
                .then(() => {
                    this.$router.push("/view");
                    this.$emit('passenger-created');
                })
                .catch((error) => {
                    console.log(error);
                });
        }

    }
}
</script>

<style>
main{
    min-height: 100vh;
}
</style>