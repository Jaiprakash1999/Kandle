import React from "react";
import styles from "../../styles/Home.module.css";
import User from "next/image";

const Users = () => {
    return (
        <div>
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
                    <span className={styles.rewards_value}>100 USDT</span>
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
                    <span className={styles.rewards_value}>50 USDT</span>
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
                    <span className={styles.rewards_value}>6 USDT</span>
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
                    <span className={styles.rewards_value}>0.5 USDT</span>
                    rewards
                </span>
            </div>
        </div>
    );
};

export default Users;
