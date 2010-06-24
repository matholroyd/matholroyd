App = YAML.load(File.read("#{RAILS_ROOT}/config/application.yml"))[RAILS_ENV].recursively(&:symbolize_keys)
