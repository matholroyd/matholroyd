require 'spec_helper'

describe Html5Controller do
  integrate_views

  describe "GET 'index'" do
    it "should be successful" do
      get :index
      response.should be_success
    end
  end

end
