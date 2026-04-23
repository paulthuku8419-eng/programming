package vehicleimplementation;

import java.util.Scanner;

public class VehicleSystem {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        try {

            System.out.println("Enter Car Details");

            System.out.print("Make: ");
            String make = scanner.nextLine();

            System.out.print("Model: ");
            String model = scanner.nextLine();

            System.out.print("Year: ");
            int year = scanner.nextInt();

            Car car = new Car(make, model, year);

            System.out.print("Number of doors: ");
            car.setNumberOfDoors(scanner.nextInt());

            scanner.nextLine();

            System.out.print("Fuel type: ");
            car.setFuelType(scanner.nextLine());

            System.out.println("\nCar Details:");
            System.out.println(car.getMake() + " " + car.getModel());
            System.out.println("Year: " + car.getYear());
            System.out.println("Doors: " + car.getNumberOfDoors());
            System.out.println("Fuel: " + car.getFuelType());

        } catch (Exception e) {

            System.out.println("Invalid input detected. Please restart the program.");

        } finally {

            scanner.close();

        }

    }
}