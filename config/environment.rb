RAILS_GEM_VERSION = '2.3.8' unless defined? RAILS_GEM_VERSION

require File.join(File.dirname(__FILE__), 'boot')

Rails::Initializer.run do |config|
  config.time_zone = 'Canberra'

  config.action_mailer.raise_delivery_errors = true
  config.action_mailer.delivery_method = :smtp


  config.time_zone = 'UTC'
end