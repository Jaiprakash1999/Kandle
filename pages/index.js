import styles from "../styles/Home.module.css";
import KandleImage from "next/image";
import UserImage from "next/image";
import GoogleImage from "next/image";
import LifeTimeCommission from "next/image";
import SignupBonus from "next/image";
import Rewards from "next/image";
import User from "next/image";
import EyeView from "next/image";
import Circle from "next/image";

export default function Home() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <KandleImage
                    src="/kandle.svg"
                    alt="Kandle logo"
                    height={20}
                    width={60}
                />
                <span className={styles.track}>Track Commission</span>
            </header>

            <main className={styles.main}>
                <div className={styles.affiliate_container}>
                    <div className={styles.became_text}>Become a</div>
                    <div className={styles.affiliate_text}>
                        <stron className={styles.kandle_text}> KANDLE</stron>
                        AFFILIATE
                    </div>
                </div>
                <div>
                    <UserImage
                        src="/userImage.svg"
                        alt="user Image"
                        width={420}
                        height={180}
                    />
                </div>
                <div className={styles.reward_cmparison}>
                    <span className={styles.fortyx}> 40x </span>
                    <span className={styles.text}>
                        more rewarding than being a crypto exchange’s affiliate
                    </span>
                </div>
                <div className={styles.google_sign_up}>
                    <GoogleImage
                        src="/google.svg"
                        alt="google logo"
                        height={20}
                        width={20}
                    />
                    <strong className={styles.signup_text}>
                        Sign up with Google
                    </strong>
                </div>
                <div className={styles.hr} />
                <div className={styles.commission_container}>
                    <div className={styles.reward_cmparison}>
                        <strong className={styles.ten_percent}>10%</strong>
                        <strong className={styles.lifetime_commision}>
                            LIFETIME COMMISION
                        </strong>
                    </div>
                    <div>
                        <div className={styles.info_text}>
                            Earn 10% Lifetime Commission on paid entry fees by
                            your
                        </div>
                        <div className={styles.info_text}>
                            referred users, every time they play a league on
                            Kandle.
                        </div>
                    </div>
                    <div className={styles.reward_cmparison}>
                        <LifeTimeCommission
                            src="/lifetimeCommision.svg"
                            alt="10% LifeTime Commission"
                            height={200}
                            width={400}
                        />
                    </div>
                </div>
                <div className={styles.commission_container}>
                    <div className={styles.reward_cmparison}>
                        <strong className={styles.ten_percent}>1USDT </strong>
                        <strong className={styles.lifetime_commision}>
                            SIGNUP BONUS
                        </strong>
                    </div>
                    <div>
                        <span className={styles.info_text}>
                            All your referred users gets up to 1 USDT signup
                            bonus
                        </span>
                    </div>
                    <div className={styles.reward_cmparison}>
                        <SignupBonus
                            src="/signupBonus.svg"
                            alt="Signup Bonus"
                            height={130}
                            width={200}
                        />
                    </div>
                </div>
                <div className={styles.rewards_circle}>
                    <div className={styles.animation_container}>
                        <Circle
                            src="/circle.svg"
                            alt="Circle"
                            height={20}
                            width={20}
                        />
                    </div>
                    <span className={styles.info_text}>Live Rewards</span>
                </div>
                <div className={styles.commission_container}>
                    <div className={styles.reward_cmparison}>
                        <Rewards
                            src="/rewards.svg"
                            alt="Rewards"
                            height={100}
                            width={120}
                        />
                    </div>
                    <div className={styles.total_rewards_text}>
                        Total Rewards Set To-Date
                    </div>
                    <strong className={styles.total_rewards}>
                        198763.86 USDT
                    </strong>
                    <div className={styles.hr} />
                    <div style={{ marginTop: "12px" }}>
                        <div className={styles.user_container}>
                            <span className={styles.user_avator}>
                                <User
                                    src="/user.svg"
                                    alt="user avator"
                                    height={20}
                                    width={20}
                                />
                            </span>
                            <span className={styles.info_text}>
                                Parteek Garg Got{" "}
                                <span className={styles.rewards_value}>
                                    100 USDT
                                </span>
                                rewards
                            </span>
                        </div>
                        <div className={styles.user_container}>
                            <span className={styles.user_avator}>
                                <User
                                    src="/user.svg"
                                    alt="user avator"
                                    height={20}
                                    width={20}
                                />
                            </span>
                            <span className={styles.info_text}>
                                Manish Sir Got{" "}
                                <span className={styles.rewards_value}>
                                    50 USDT
                                </span>
                                rewards
                            </span>
                        </div>
                        <div className={styles.user_container}>
                            <span className={styles.user_avator}>
                                <User
                                    src="/user.svg"
                                    alt="user avator"
                                    height={20}
                                    width={20}
                                />
                            </span>
                            <span className={styles.info_text}>
                                Rajat Gulati Got{" "}
                                <span className={styles.rewards_value}>
                                    6 USDT
                                </span>
                                rewards
                            </span>
                        </div>
                        <div className={styles.user_container}>
                            <span className={styles.user_avator}>
                                <User
                                    src="/user.svg"
                                    alt="user avator"
                                    height={20}
                                    width={20}
                                />
                            </span>
                            <span className={styles.info_text}>
                                Abhay Sharma Got{" "}
                                <span className={styles.rewards_value}>
                                    0.5 USDT
                                </span>
                                rewards
                            </span>
                        </div>
                    </div>
                </div>

                <div>Register now to get your Affiliate Code</div>
                <div className={styles.google_sign_up}>
                    <GoogleImage
                        src="/google.svg"
                        alt="google logo"
                        height={20}
                        width={20}
                    />

                    <strong className={styles.signup_text}>
                        Sign up with Google
                    </strong>
                </div>
                <div className={styles.hr} />
            </main>
            <div className={styles.bottom}>
                <div className={styles.info_text}>TERMS & CONDITIONS</div>
                <div className={styles.view_text}>
                    <span className={styles.info_text}>View</span>
                    <span className={styles.view_icon}>
                        <EyeView
                            src="/eye.svg"
                            alt="Eye view Icon"
                            height={12}
                            width={12}
                        />
                    </span>
                </div>
            </div>
        </div>
    );
}
