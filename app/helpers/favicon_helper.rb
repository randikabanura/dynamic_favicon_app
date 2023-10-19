module FaviconHelper

  def select_favicon(controller_name, action_name)
    case "#{controller_name}##{action_name}"
    when 'application#home'
      favicon_link_tag asset_path('favicon-1.png'), id: 'favicon'
    when 'posts#index'
      favicon_link_tag asset_path('favicon-2.png'), id: 'favicon'
    else
      favicon_link_tag asset_path('favicon-3.png'), id: 'favicon'
    end
  end
end
