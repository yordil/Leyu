import React from "react";
import styles from "./signup.module.css";
import Leyu from "../../assets/images/Leyu.png";
import signup from "../../assets/images/signup.png";
import contactus from "../../assets/images/contactus.png";
import { Link } from "react-router-dom";
const Signup = () => {
	return (
		<div className={styles.pageContainer}>
			<header className={styles.header}>
				<div className={styles.navbar}>
					<div className={styles.logo}>
						<img src={Leyu} alt="Logo" />
					</div>
					<nav>
						<ul className={styles.navList}>
							<li>
								<a href="#">Home</a>
							</li>
							<li>
								<a href="#">About us</a>
							</li>
							<li>
								<a href="#">Contact us</a>
							</li>
						</ul>
					</nav>
					<div className={styles.authButtons}>
						{/* link to Login page */}
						<button className={styles.login}>
							<Link to="/login" className={styles.login}>
								Login
							</Link>
						</button>
					
						<button className={styles.signup}>Sign up Free</button>
					</div>
				</div>
			</header>

			<main className="pl-6 pr-6">
				<section className={styles.hero}>
					<h1>
						Join <span className={styles.leyuHeader}>LEYU</span>
					</h1>
					<p>
						Create an account to access exclusive resources and Teaching
						Assistant from experts
					</p>
				</section>

				<section className={styles.signupForm}>
					<div className={styles.formContainer}>
						<h2>Sign up</h2>
						<p>
							Enter your and your child details below to create an account and
							get started
						</p>
						<form>
							<div className={styles.formGroup}>
								<div className={styles.formField}>
									<label htmlFor="pname">Full Name</label>
									<input
										type="text"
										placeholder="Full Name"
										name="pname"
										id="pname"
										required
									/>
								</div>
								<div className={styles.formField}>
									<label htmlFor="email">Email</label>
									<input
										type="email"
										placeholder="Email"
										name="email"
										id="email"
										required
									/>
								</div>
							</div>
							<div className={styles.formGroup}>
								<div className={styles.formField}>
									<label htmlFor="Phone">Phone Number</label>
									<input
										type="text"
										placeholder="Phone number"
										name="Phone"
										id="Phone"
										required
									/>
								</div>
								<div className={styles.formField}>
									<label htmlFor="ppassword">Password</label>
									<input
										type="password"
										placeholder="Password"
										name="ppassword"
										id="ppassword"
										required
									/>
								</div>
							</div>
							<div className={styles.formGroup}>
								<div className={styles.formField}>
									<label htmlFor="ppassword">Confirm Password</label>
									<input
										type="password"
										placeholder="Confirm password"
										name="ppassword"
										id="ppassword"
									/>
								</div>
								<div className={styles.formField}>
									<label htmlFor="cname">Child's Name</label>
									<input
										type="text"
										placeholder="Child's name"
										name="cname"
										id="cname"
										required
									/>
								</div>
							</div>
							<div className={styles.formGroup}>
								<div className={styles.formField}>
									<label htmlFor="bdate">Child's Birthday</label>
									<input
										type="date"
										placeholder="Date of Birth"
										name="bdate"
										id="bdate"
										required
									/>
								</div>
								<div className={styles.formField}>
									<label htmlFor="username">Child's Username</label>
									<input
										type="text"
										placeholder="Username"
										name="username"
										id="username"
										required
									/>
								</div>
							</div>
							<div className={styles.formGroup}>
								<div className={styles.formField}>
									<label htmlFor="cpassword">Child's Password</label>
									<input
										type="password"
										placeholder="Password"
										name="cpassword"
										id="cpassword"
										required
									/>
								</div>
								<div className={styles.formField}>
									<label htmlFor="cpassword">Confirm Child's Password</label>
									<input type="password" placeholder="Confirm password" />
								</div>
							</div>
							<div className={styles.formGroup}>
								<div className={styles.formField}>
									<label htmlFor="impairment-type">Impairment Type</label>
									<select id="impairment-type" required>
										<option value="" disabled selected>
											Select Impairment Type
										</option>
										<option value="type1">Can't Speak</option>
										<option value="type2">Can't Hear</option>
										<option value="type3">Both</option>
									</select>
								</div>
							</div>
							<button type="submit" className={styles.signupBtn}>
								Submit
							</button>
						</form>
					</div>
					<div className={styles.imageContainer}>
						<img src={signup} alt="Register" />
					</div>
				</section>

				<section className={styles.contact}>
					<div className={styles.contactContainer}>
						<div className="flex">
							<div className={styles.contactInfo}>
								<h2>Contact Us</h2>
								<p>
									Have any questions or need assistance? Feel free to reach out
									to us!
								</p>
								<div className={styles.email}>
									<p>
										<i
											className="fa-solid fa-envelope"
											style={{ color: "#007bff" }}
										></i>
										Email
									</p>
									<p>leyuneeds@gmail.com</p>
								</div>
								<div className={styles.phone}>
									<p>
										<i
											className="fa-solid fa-phone"
											style={{ color: "#007bff" }}
										></i>
										Phone
									</p>
									<p>+251973015882</p>
								</div>
								<div className={styles.office}>
									<p>
										<i
											className="fa-solid fa-location-dot"
											style={{ color: "#007bff" }}
										></i>
										Office
									</p>
									<p>1000 Addis Ababa, Ethiopia</p>
								</div>
							</div>
							<div className={styles.map}>
								<iframe
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38862.69353626599!2d38.80539761200189!3d8.872282489458852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b82a7e392203f%3A0xb05f440eacc98f9f!2sAddis%20Ababa%20Science%20and%20Technology%20University!5e0!3m2!1sen!2set!4v1721119990453!5m2!1sen!2set"
									width="600"
									height="450"
									style={{ border: 0 }}
									allowFullScreen=""
									loading="lazy"
									referrerPolicy="no-referrer-when-downgrade"
								></iframe>
							</div>
						</div>
						<div
							className={styles.contactImageFormContainer}
							class="flex center"
						>
							<div className={styles.contactImg}>
								<img src={contactus} alt="Contact Us" />
							</div>
							<div className={styles.contactForm}>
								<h2 class="mt-10">Give Us Information</h2>

								<p>Have a question or feedback? Get in touch!</p>
								<form className="mt-24">
									<div className={styles.formGroup}>
										<input type="text" placeholder="Full Name" />
										<input type="email" placeholder="Email" />
									</div>
									<div className={styles.formGroup}>
										<textarea placeholder="Message"></textarea>
									</div>
									<button type="submit">Submit</button>
								</form>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
};

export default Signup;