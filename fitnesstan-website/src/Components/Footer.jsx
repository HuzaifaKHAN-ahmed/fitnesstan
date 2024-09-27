import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import styles from "./Footer.module.css"; // Importing CSS module

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <Row className={styles.footerRow}>
          <Col md={4}>
            <h5>About Fitnesstan</h5>
            <p>
              Fitnesstan is your AI-powered fitness companion, offering
              personalized workouts, dietary supplements, nutrition advice and
              tailored guidance, including for diabetics. It’s more than just
              fitness—combining health, nutrition, and well-being in one place.
            </p>
          </Col>

          <Col md={4}>
            <h5>Contact Us</h5>
            <ul className={styles.contactInfo}>
              <li>
                <FaMapMarkerAlt /> Riphah I-14 Campus, Islamabad, Pakistan
              </li>
              <li>
                <FaPhone /> +92 344 6558870
              </li>
              <li>
                <FaEnvelope /> pandistic.zain@gmail.com
              </li>
            </ul>
          </Col>

          <Col md={4}>
            <h5>Certifications/Partners</h5>
            <p>
              We collaborate with top fitness organizations to provide the best
              services. We have partnered with{" "}
              <strong>Fitness Arena Gym</strong>, located in G-6, Islamabad,
              where <strong>Mr. Mamoon Ur Rehman</strong> has assisted us in
              nutritionist-related works. He is an{" "}
              <strong>
                ISSA certified Personal Trainer, Nutritionist, and Fitness
                Coach.
              </strong>
            </p>
          </Col>
        </Row>

        <hr className={styles.divider} />

        <Row className="text-center">
          <Col>
            <h5>Follow Us</h5>

            <ul className={styles.socailmedia}>
              <li>
                <a
                  href="https://www.facebook.com/people/Zain-Ul-Abideen/pfbid0FA2yfbArz8XUWCG3RCW5phCZzwf6JykdWXcVLFbuJi2ztj8pVXagrYbJskGfywwzl/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    viewBox="0 0 10.712 20"
                    height="20"
                    width="10.712"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      transform="translate(-22.89)"
                      d="M32.9,11.25l.555-3.62H29.982V5.282a1.81,1.81,0,0,1,2.041-1.955H33.6V.245A19.255,19.255,0,0,0,30.8,0c-2.86,0-4.73,1.734-4.73,4.872V7.63H22.89v3.62h3.179V20h3.913V11.25Z"
                      id="facebook"
                    ></path>
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="https://www.instagram.com/fit._.zain/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    viewBox="0 0 20 20"
                    height="20"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    id="instagram"
                  >
                    <g
                      transform="translate(15.354 3.707)"
                      data-name="Group 64"
                      id="Group_64"
                    >
                      <g data-name="Group 63" id="Group_63">
                        <path
                          fill="#00"
                          transform="translate(-392.401 -94.739)"
                          d="M392.871,94.739a.47.47,0,1,0,.47.47A.47.47,0,0,0,392.871,94.739Z"
                          data-name="Path 5"
                          id="Path_5"
                        ></path>
                      </g>
                    </g>
                    <g
                      transform="translate(5.837 5.837)"
                      data-name="Group 66"
                      id="Group_66"
                    >
                      <g data-name="Group 65" id="Group_65">
                        <path
                          fill="#000"
                          transform="translate(-145.804 -145.804)"
                          d="M149.967,145.8a4.163,4.163,0,1,0,4.163,4.163A4.168,4.168,0,0,0,149.967,145.8Z"
                          data-name="Path 6"
                          id="Path_6"
                        ></path>
                      </g>
                    </g>
                    <g data-name="Group 68" id="Group_68">
                      <g data-name="Group 67" id="Group_67">
                        <path
                          fill="#000"
                          d="M14.517,0H5.483A5.489,5.489,0,0,0,0,5.483v9.035A5.489,5.489,0,0,0,5.483,20h9.035A5.489,5.489,0,0,0,20,14.517V5.483A5.489,5.489,0,0,0,14.517,0ZM10,15.486A5.486,5.486,0,1,1,15.486,10,5.492,5.492,0,0,1,10,15.486Zm5.814-9.633A1.667,1.667,0,1,1,17.48,4.186,1.669,1.669,0,0,1,15.814,5.853Z"
                          data-name="Path 7"
                          id="Path_7"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/in/zain-ul-abideen-b9215a283/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    viewBox="0 0 20 20"
                    height="20"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    id="_x31_0.Linkedin"
                  >
                    <path
                      fill="#000"
                      transform="translate(-31.438 -29.201)"
                      d="M51.438,49.2V41.755c0-3.659-.788-6.455-5.057-6.455a4.413,4.413,0,0,0-3.99,2.186h-.051V35.63H38.3V49.2h4.219V42.466c0-1.779.33-3.482,2.516-3.482,2.16,0,2.186,2.008,2.186,3.583v6.607h4.219Z"
                      data-name="Path 1"
                      id="Path_1"
                    ></path>
                    <path
                      fill="#000"
                      transform="translate(-10.97 -30.17)"
                      d="M11.3,36.6h4.219V50.17H11.3Z"
                      data-name="Path 2"
                      id="Path_2"
                    ></path>
                    <path
                      fill="#000"
                      transform="translate(-10 -10)"
                      d="M12.44,10a2.452,2.452,0,1,0,2.44,2.44A2.44,2.44,0,0,0,12.44,10Z"
                      data-name="Path 3"
                      id="Path_3"
                    ></path>
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="https://www.snapchat.com/add/zain.gallery?share_id=Y-6Fv4VUUmo&locale=en-US"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    viewBox="0 0 19.838 18.6"
                    height="18.6"
                    width="19.838"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g
                      transform="translate(0 -15.988)"
                      data-name="svgexport-10 (13)"
                      id="svgexport-10_13_"
                    >
                      <g
                        transform="translate(0 15.988)"
                        data-name="Group 10"
                        id="Group_10"
                      >
                        <g
                          transform="translate(0 0)"
                          data-name="Group 9"
                          id="Group_9"
                        >
                          <path
                            fill="#000"
                            transform="translate(0 -15.988)"
                            d="M19.449,29.877a5.73,5.73,0,0,1-3.9-3.269.188.188,0,0,0-.011-.022.82.82,0,0,1-.093-.675c.145-.34.7-.516,1.068-.632.107-.033.207-.066.29-.1a2.245,2.245,0,0,0,.791-.472.751.751,0,0,0,.241-.541.851.851,0,0,0-.637-.738,1.152,1.152,0,0,0-.432-.082.961.961,0,0,0-.4.082,2.255,2.255,0,0,1-.827.236.759.759,0,0,1-.274-.06c.007-.124.015-.252.024-.383l0-.057a9.821,9.821,0,0,0-.253-4.005,5.388,5.388,0,0,0-1.214-1.737,5.076,5.076,0,0,0-1.452-.957,5.737,5.737,0,0,0-2.265-.479h-.05l-.341,0a5.759,5.759,0,0,0-2.268.479A5.048,5.048,0,0,0,6,17.426,5.4,5.4,0,0,0,4.8,19.16a9.829,9.829,0,0,0-.254,4v0c.009.144.019.294.027.44a.8.8,0,0,1-.325.061,2.151,2.151,0,0,1-.884-.237.794.794,0,0,0-.336-.069,1.188,1.188,0,0,0-.594.166.822.822,0,0,0-.42.537.741.741,0,0,0,.283.7,2.438,2.438,0,0,0,.739.423c.084.033.185.064.29.1.367.117.924.293,1.069.632a.826.826,0,0,1-.094.675.176.176,0,0,0-.01.022,6.566,6.566,0,0,1-1,1.545,5.608,5.608,0,0,1-1.205,1.064,4.435,4.435,0,0,1-1.693.658A.463.463,0,0,0,0,30.359a.587.587,0,0,0,.048.2h0a1.239,1.239,0,0,0,.672.574,7.675,7.675,0,0,0,1.941.5,2.354,2.354,0,0,1,.119.427c.032.149.066.3.114.465a.508.508,0,0,0,.532.387,2.59,2.59,0,0,0,.456-.063,5.189,5.189,0,0,1,1.04-.118,4.521,4.521,0,0,1,.744.063,3.534,3.534,0,0,1,1.39.718A4.5,4.5,0,0,0,9.8,34.587q.05,0,.1,0c.04,0,.091,0,.143,0a4.507,4.507,0,0,0,2.74-1.066h0a3.546,3.546,0,0,1,1.39-.717,4.521,4.521,0,0,1,.744-.063,5.213,5.213,0,0,1,1.04.11,2.514,2.514,0,0,0,.456.056h.022a.5.5,0,0,0,.51-.381c.047-.16.081-.309.114-.461a2.435,2.435,0,0,1,.118-.424,7.728,7.728,0,0,0,1.941-.5,1.244,1.244,0,0,0,.671-.573.589.589,0,0,0,.05-.2A.461.461,0,0,0,19.449,29.877Z"
                            data-name="Path 6565"
                            id="Path_6565"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="https://www.tiktok.com/@pandistic._.zain?_t=8punaLQ6HdC&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    viewBox="0 0 19.738 22.466"
                    height="22.466"
                    width="19.738"
                    xmlns="http://www.w3.org/2000/svg"
                    data-name="Group 101"
                    id="Group_101"
                  >
                    <path
                      fill="#000"
                      transform="translate(-31.423 -0.39)"
                      d="M51.151,6.015a5.661,5.661,0,0,1-3.42-1.143A5.662,5.662,0,0,1,45.469.39H41.8V10.414l0,5.49a3.325,3.325,0,1,1-2.281-3.151V9.029a7.218,7.218,0,0,0-1.058-.078,7.034,7.034,0,0,0-5.286,2.364,6.893,6.893,0,0,0,.311,9.505,7.158,7.158,0,0,0,.663.579,7.035,7.035,0,0,0,4.312,1.458,7.219,7.219,0,0,0,1.058-.078,7.011,7.011,0,0,0,3.917-1.959,6.868,6.868,0,0,0,2.06-4.887l-.019-8.2a9.3,9.3,0,0,0,5.688,1.933V6.014h-.011Z"
                      data-name="Path 6566"
                      id="Path_6566"
                    ></path>
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="https://x.com/pandistic_zayn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    viewBox="0 0 23.06 18"
                    height="18"
                    width="23.06"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#000"
                      transform="translate(0 -48.082)"
                      d="M20.69,52.568c.015.2.015.394.015.591A13.085,13.085,0,0,1,7.258,66.082,13.752,13.752,0,0,1,0,64.043a10.168,10.168,0,0,0,1.141.056,9.712,9.712,0,0,0,5.868-1.941,4.715,4.715,0,0,1-4.419-3.15,6.2,6.2,0,0,0,.893.07,5.189,5.189,0,0,0,1.244-.155,4.592,4.592,0,0,1-3.79-4.458V54.41a4.907,4.907,0,0,0,2.136.577A4.5,4.5,0,0,1,.966,51.2a4.375,4.375,0,0,1,.644-2.292,13.621,13.621,0,0,0,9.745,4.753,4.936,4.936,0,0,1-.117-1.041,4.635,4.635,0,0,1,4.726-4.542,4.806,4.806,0,0,1,3.453,1.434,9.538,9.538,0,0,0,3-1.1,4.567,4.567,0,0,1-2.078,2.5,9.779,9.779,0,0,0,2.722-.7A9.953,9.953,0,0,1,20.69,52.568Z"
                      id="twitter"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
            <p>
              &copy; {new Date().getFullYear()} Fitnesstan. All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
