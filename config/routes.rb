ActionController::Routing::Routes.draw do |map|
  map.controller_actions 'home', %w{index}
  
  map.root :controller => 'home', :action => 'index'
end
