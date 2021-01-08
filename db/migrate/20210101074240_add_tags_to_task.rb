class AddTagsToTask < ActiveRecord::Migration[6.0]
  def change
    add_column :tasks, :tags, :text
  end
end
