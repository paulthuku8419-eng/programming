package vehicleimplementation;

class Motorcycle implements Vehicle, MotorVehicle {

    private String make;
    private String model;
    private int year;
    private int wheels;
    private String type;

    public Motorcycle(String make, String model, int year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    public String getMake() { return make; }
    public String getModel() { return model; }
    public int getYear() { return year; }

    public void setNumberOfWheels(int wheels) {
        this.wheels = wheels;
    }

    public int getNumberOfWheels() {
        return wheels;
    }

    public void setMotorcycleType(String type) {
        this.type = type;
    }

    public String getMotorcycleType() {
        return type;
    }
}