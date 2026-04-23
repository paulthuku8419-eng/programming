package vehicleimplementation;

class Car implements Vehicle, CarVehicle {

    private String make;
    private String model;
    private int year;
    private int numberOfDoors;
    private String fuelType;

    public Car(String make, String model, int year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    public String getMake() { return make; }
    public String getModel() { return model; }
    public int getYear() { return year; }

    public void setNumberOfDoors(int doors) {
        numberOfDoors = doors;
    }

    public int getNumberOfDoors() {
        return numberOfDoors;
    }

    public void setFuelType(String fuelType) {
        this.fuelType = fuelType;
    }

    public String getFuelType() {
        return fuelType;
    }
}