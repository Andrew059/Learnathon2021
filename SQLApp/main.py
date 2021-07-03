import mysql.connector

db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="root",
    database="readingchart"
)

mycursor = db.cursor()
mycursor.execute("CREATE TABLE Books (id int PRIMARY KEY AUTO_INCREMENT, Title of Book VARCHAR(50), Fiction or Non-Fiction ENUM('F', 'NF'), Author's Name VARCHAR(50), Month Started VARCHAR(20), Month Finished VARCHAR(50), Number of Pages smallint UNSIGNED, Rating out of 5 smallint UNSIGNED)")


def addBook(title_of_book, fiction_or_nonfiction, author_name, month_start, month_end, number_of_pages, rating):
  mycursor.execute("INSERT INTO Books (name, age) VALUES (%s,%s,%s,%s,%s,%s,%s)", (title_of_book, fiction_or_nonfiction, author_name, month_start, month_end, number_of_pages, rating))
  db.commit()

def createBook():
    title_of_book = str(input("Enter the name of the title of your book: "))
    fiction_or_nonfiction = str(input("Is your book a work of fiction or non-fiction: "))
    author_name = str(input("Enter the author's name: "))
    month_start = str(input("Enter the month that you started reading this book: "))
    month_end = str(input("Enter the month that you finished reading this book: "))
    number_of_pages = int(input("Enter the book's total number of pages: "))
    rating = int(input("Enter your rating out of 5 for this book: "))
    addBook(title_of_book, fiction_or_nonfiction, author_name, month_start, month_end, number_of_pages, rating)

def deleteBook():
    sql = "DELETE FROM Books WHERE title_of_book = %s"
    name = (input("Enter name of the book that you want to delete: "), )
    confirm = str(input("Are you sure about that(Y/N)? ")) == "Y"

    if confirm:
        myCursor.execute(sql, title_of_book)
        mydb.commit()
        print("\nBook deleted.")
    else:
        print("\nCanceled Command")


def checkBook():
  mycursor.execute("SELECT * FROM Books ORDER BY id ASC")
  for x in mycursor:
     print(x)



