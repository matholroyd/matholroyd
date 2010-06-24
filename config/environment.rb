RAILS_GEM_VERSION = '2.3.5' unless defined? RAILS_GEM_VERSION

require File.join(File.dirname(__FILE__), 'boot')

Rails::Initializer.run do |config|
  config.gem 'faker'
  config.gem 'haml'
  config.gem 'justinfrench-formtastic', :lib => 'formtastic', :source => 'http://gems.github.com'
  config.gem 'tworgy-ruby'
  config.gem 'tworgy-rails', :version => '>= 0.4.2'
  config.gem 'super_exception_notifier', :version => '>= 2.0.8', :lib => "exception_notifier"
  config.gem 'jslint_on_rails', :lib => 'jslint'
        
  config.time_zone = 'Canberra'

  config.action_mailer.raise_delivery_errors = true
  config.action_mailer.delivery_method = :smtp


  config.time_zone = 'UTC'
end