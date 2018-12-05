class DeleteTitle < ActiveRecord::Migration[5.2]
  def change
    remove_column :comments, :title
    remove_column :comments, :body
    add_column :comments, :body, :text
  end
end
