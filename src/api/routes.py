"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token

api = Blueprint('api', __name__)


#SIGNUP
@api.route('/signup', methods=['POST'])
def signup():
    email = request.json.get("email", None)
    password = request.json.get("password", None)

    existing_user_email = User.query.filter_by(email=email).first()
    if existing_user_email is not None:
        return jsonify({"msg": "This email already exists"}), 401
    
    user = User(
        email=email,
        password=password,
        is_active=True,
    )

    db.session.add(user)
    db.session.commit()
    return jsonify({"msg": "User created successfully"}), 200

#TOKEN
@api.route("/login", methods=["POST"])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    
    user = User.query.filter_by(email=email, password=password).first()
    if user is None:
        return jsonify({"msg": "Bad username or password"}), 401
    
    access_token = create_access_token(identity=user.id)
    return jsonify({ "token": access_token, "user_id": user.id })