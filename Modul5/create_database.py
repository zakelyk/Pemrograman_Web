import importlib

# Check if mysql-connector is installed
try:
    importlib.import_module('mysql.connector')
except ImportError:
    install_mysql_connector = input("Module 'mysql-connector-python' is not installed. Do you want to install it? (y/n): ").lower()
    
    if install_mysql_connector == 'y':
        try:
            import pip
            pip.main(['install', 'mysql-connector-python'])
        except:
            print("Failed to install 'mysql-connector-python'. Please install it manually.")
            exit()

    else:
        print("Program cannot run without 'mysql-connector-python'. Please install it and run the program again.")
        exit()

import mysql.connector
from mysql.connector import Error

def create_database(host, user, password):
    try:
        connection = mysql.connector.connect(
            host=host,
            user=user,
            password=password
        )

        cursor = connection.cursor()

        # Create the database
        cursor.execute("CREATE DATABASE IF NOT EXISTS modul5")

        print("Database 'modul5' created successfully")

    except Error as e:
        print(f"Error: {e}")

    finally:
        if connection.is_connected():
            cursor.close()
            connection.close()

def create_table(host, user, password):
    try:
        connection = mysql.connector.connect(
            host=host,
            user=user,
            password=password,
            database="modul5"
        )

        cursor = connection.cursor()

        # Create the 'praktikum' table
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS praktikum (
                id INT AUTO_INCREMENT PRIMARY KEY,
                product_name VARCHAR(225),
                created_at TIMESTAMP,
                updated_at TIMESTAMP
            )
        """)

        print("Table 'praktikum' created successfully")

    except Error as e:
        print(f"Error: {e}")

    finally:
        if connection.is_connected():
            cursor.close()
            connection.close()

if __name__ == "__main__":
    # Input for Host Url, user, password
    host_input = input("Host (default: localhost): ")
    host = host_input if host_input else "localhost"

    user_input = input("User (default: root): ")
    user = user_input if user_input else "root"

    password_input = input("Password (default: empty): ")
    password = password_input if password_input else ""

    # Create database and table
    create_database(host, user, password)
    create_table(host, user, password)
