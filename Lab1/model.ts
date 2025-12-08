enum gearbox {
	manual = "manual",
	automatic = "automatic",
}

enum payment_method {
	cash = "cash",
	credit_card = "credit_card",
	online = "online",
}

enum payment_status {
	successful = "successful",
	pending = "pending",
	failed = "failed",
}

enum membership_plan {
	theory = "theory",
	practice = "practice",
}

enum membership_status {
	active = "active",
	terminated = "terminated",
}

interface DrivingSchool {
	driving_school_id: number; // PK
	address: string;
	director: string;
}

interface TrainingGround {
	training_ground_id: number; // PK
	driving_school_id: number; // FK → DrivingSchool
	address: string;
}

interface Car {
	car_id: number; // PK
	driving_school_id: number; // FK → DrivingSchool
	model: string;
	gearbox: gearbox;
	year_of_production: number;
	mileage: number;
	license_plate: string;
}

interface ContactData {
	contact_data_id: number; // PK
	phone: string;
	email: string;
}

interface Teacher {
	teacher_id: number; // PK
	contact_data_id: number; // FK → ContactData
	driving_school_id: number; // FK → DrivingSchool
	name: string;
	surname: string;
	seniority: string;
}

interface Instructor {
	instructor_id: number; // PK
	contact_data_id: number; // FK → ContactData
	driving_school_id: number; // FK → DrivingSchool
	car_id: number; // FK → Car
	name: string;
	surname: string;
	seniority: number;
}

interface Student {
	student_id: number; // PK
	contact_data_id: number; // FK → ContactData
	name: string;
	surname: string;
	is_passed_theoretical_exam: boolean;
}

interface Payment {
	payment_id: number; // PK
	student_id: number; // FK → Student
	amount: number;
	method: payment_method;
	status: payment_status;
	date: Date;
}

interface Membership {
	membership_id: number; // PK
	payment_id: number; // FK → Payment
	driving_school_id: number; // FK → DrivingSchool
	start_date: Date;
	end_date: Date;
	plan: membership_plan;
	status: membership_status;
}
