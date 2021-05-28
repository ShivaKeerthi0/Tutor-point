package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/mux"

	_ "github.com/go-sql-driver/mysql"
)

func insHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Println("invoked!")

	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
	w.Header().Set("Content-Type", "application/json")

	var mail string = r.FormValue("cmail")
	var cid string = r.FormValue("cid")
	var cimg string = r.FormValue("cimg")
	var cname string = r.FormValue("cname")
	var cprice string = r.FormValue("cprice")
	db, err := sql.Open("mysql", "root@tcp(localhost)/tutor")

	if err != nil {
		fmt.Println(err.Error())
	}
	defer db.Close()
	statement, err := db.Prepare("INSERT INTO coursesreg SET email=?, cid=?, cimg=?,cname=?,cprice=?")
	if err != nil {
		json.NewEncoder(w).Encode("connection failed!")
		return
	}
	defer statement.Close()
	insert, err := statement.Exec(mail, cid, cimg, cname, cprice)
	if err != nil {
		json.NewEncoder(w).Encode("Insertion Failed")
		return
	}
	fmt.Println(insert.RowsAffected())
	json.NewEncoder(w).Encode("successfull")
}
func main() {
	fmt.Println("Hi!")

	myRouter := mux.NewRouter()

	myRouter.HandleFunc("/coursesreg", insHandler).Methods("POST")
	log.Fatal(http.ListenAndServe(":8082", myRouter))

}
