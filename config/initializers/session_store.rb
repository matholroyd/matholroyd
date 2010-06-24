# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_matholroyd_session',
  :secret      => '62641ba2c11f848b17b562c2babcedf4c43ae8f5bddc2cf58242195c5a558fd03df25be67d055ad27b3393ea0cf9e44354613bc6e273a5cb84d4082814761f08'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
