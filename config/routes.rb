ActionController::Routing::Routes.draw do |map|
  map.controller_actions 'home', %w{index}
  map.controller_actions 'html5', %w{index}
  
  map.root :controller => 'home', :action => 'index'
end
